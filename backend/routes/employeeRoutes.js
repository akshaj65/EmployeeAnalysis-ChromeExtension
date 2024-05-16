import express from "express";
import { getAgeDistribution, getEmployeeById, getEmployeesByFirstName, getFields } from "../controllers/employeeController.js";

const employeeRouter = express.Router();


/**
 * GET  /api/v1/employee?firstName=:firstName
 */
employeeRouter.get('/', getEmployeesByFirstName);


/**
 * GET /api/v1/employee/ageDistribution 
 */

employeeRouter.get('/ageDistribution', getAgeDistribution);




/** Dynamic
 * GET  /api/v1/employee/all?fields=firstName,email 
 */
 employeeRouter.get('/all', getFields);

 
/**
 * GET /api/v1/employee/:id 
 */
employeeRouter.get('/:id', getEmployeeById);





export default employeeRouter;