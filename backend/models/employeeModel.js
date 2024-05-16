import mongoose, { Schema } from "mongoose";
import validator from "validator";

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Required Name'],
        minlength: 3,
        maxlength: 50,
    },
    lastName: {
        type: String,
        required: [true, 'Required Name'],
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Required Email'],
        validate: {
            validator: validator.isEmail,
            message: 'Enter Valid Email'
        },
    },
    age: {
        type: Number,
        required: [true, 'Required age'],
    },
    
});

const Employee = new mongoose.model('employee',EmployeeSchema);
export default Employee;