// Write an ExpressJS REST API script to create an array of JSON objects named
// employee_data having properties:
// Emp_id
// Name
// Department
// Salary
// Experience
// When the user requests:
// /employees → It should display all employees data.
// /employees/:id → It should display data of the employee whose Emp_id matches the
// given id.
// Example:
// /employees/3 → Display data of employee with Emp_id 3.

const express=require('express');
const app=express();
const api=require('./api1');
app.use('/api',api);
app.listen(3008);