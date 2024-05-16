
import { StatusCodes } from "http-status-codes";
import CustomError from "../errors/custom-error.js";
import { handleErrors } from "../middlewares/error-handler.js";
import Employee from "../models/employeeModel.js";
import { getEmployeeFields } from "../utils/utils.js";




export const getEmployeesByFirstName = handleErrors(async (req, res, next) => {
    try {

        const firstName = req.query.firstName;
        const employees = await Employee.find({ firstName: { $regex: firstName, $options: "i" } });

        if (!employees) {
            return next(new CustomError.NotFoundError("Employee Not found"));
        }

        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Employees Found',
            employees,
        });
    } catch (error) {
        return next(new CustomError.InternalServerError(error.message || 'Server error'));

    }
});

export const getEmployeeById = handleErrors(async (req, res, next) => {
    try {

        const employeeId = req.params.id;
        const employee = await Employee.findById(employeeId);

        if (!employee) {
            return next(new CustomError.NotFoundError("Employee Not found"));
        }

        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Employee Found',
            employee,
        });
    } catch (error) {
        return next(new CustomError.InternalServerError(error.message || 'Server error'));

    }

});

export const getAgeDistribution = handleErrors(async (req, res, next) => {
    try {

        const employees = await Employee.find();

        if (!employees) {
            return next(new CustomError.NotFoundError("Employees Not found"));
        }
        let labels = { '18-25': 0, '26-35': 1, '36-45': 2, '46-55': 3, '56+': 4 };
        let data = [0, 0, 0, 0, 0];

        employees.forEach(employee => {
            if (employee.age >= 18 && employee.age <= 25) {
                data[labels['18-25']] += 1;
            } else if (employee.age >= 26 && employee.age <= 35) {
                data[labels['26-35']] += 1;
            } else if (employee.age >= 36 && employee.age <= 45) {
                data[labels['36-45']] += 1;
            } else if (employee.age >= 46 && employee.age <= 55) {
                data[labels['46-55']] += 1;
            } else if (employee.age >= 56) {
                data[labels['56+']] += 1;
            }
        });

        labels = Object.keys(labels)
        const dataSet = {
            labels,
            data
        }

        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Age Distribution',
            dataSet,
        });
    } catch (error) {
        return next(new CustomError.InternalServerError(error.message || 'Server error'));

    }

});


export const getFields = handleErrors(async (req, res, next) => {
    try {
        const fields = Object.keys(Employee.schema.paths).filter(field => field !== '_id' && field !== '__v');
        const queryFields = req.query.fields;
        const fieldsArray = queryFields.split(',').map(field => field.trim());

        const projection = {};
        fieldsArray.forEach(field => {
            if (fields.includes(field))
                projection[field] = 1; // Include the field in the projection
        });
        
        const employees = await Employee.find()
            .select(projection);

        if (!employees || employees.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "No employees found"
            });
        }

        // create a each field array and push to emmployeeField
        // const employeeFields = getEmployeeFields(employees,projection);
        
        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Employees Found',
            employees,
        });
    } catch (error) {
        return next(new CustomError.InternalServerError(error.message || 'Server error'));

    }

});