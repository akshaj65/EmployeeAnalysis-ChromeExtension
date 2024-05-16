
import { StatusCodes } from "http-status-codes";
import CustomError from "../errors/custom-error.js";
import { handleErrors } from "../middlewares/error-handler.js";
import Employee from "../models/employeeModel.js";


export const getEmployeesByFirstName = handleErrors(async (req, res, next) => {
    try {

        const firstName = req.query.firstName;
        const employees = await Employee.find({ firstName : {$regex : firstName,$options :"i"}} );

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

        const dataSet ={
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