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
    gender: {
        type: String,
        required: [true, 'Required gender'],
    },
    phone: {
        type: String,
        required: [true, 'Required phone'],
        minlength: 10,
        maxlength: 15,
    }, 
    education: {
        type: String,
        required: [true, 'Required education'],
    },
    occupation: {
        type: String,
        required: [true, 'Required occupation'],
    },
    salary: {
        type: Number,
        required: [true, 'Required salary'],
    },
    experience: {
        type: Number,
        required: [true, 'Required experience'],
    },
    martialStatus: {
        type: String,
        required: [true, 'Required Martial Status'],
    },
    
    
});

const Employee = new mongoose.model('employee',EmployeeSchema);
export default Employee;