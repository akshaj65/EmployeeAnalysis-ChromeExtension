import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import { errorHandlerMiddleware } from './middlewares/error-handler.js';
import employeeRouter from './routes/employeeRoutes.js';

const app = express();

let corsOptions ={
    origin: 'http://localhost:3000', // React app's origin
    credentials: true,
}

app.use(cors());

app.use(cookieParser());

app.use(bodyParser.json()); // Middleware to parse JSON bodies

app.use(bodyParser.urlencoded({ extended: true }));

//routers
app.use('/api/v1/employee',employeeRouter);


app.use(errorHandlerMiddleware);

export default app;