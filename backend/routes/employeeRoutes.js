import express from "express";
import { getAgeDistribution, getEmployeeById, getEmployeesByFirstName } from "../controllers/employeeController.js";

const employeeRouter = express.Router();


/**
 * GET  /api/v1/employee?firstName=:firstName
 */
employeeRouter.get('/', getEmployeesByFirstName);


/**
 * GET /api/v1/employee/ageDistribution 
 */

employeeRouter.get('/ageDistribution', getAgeDistribution);


/**
 * GET /api/v1/employee/:id 
 */
employeeRouter.get('/:id', getEmployeeById);



export default employeeRouter;