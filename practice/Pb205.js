// Write an ExpressJS script using RESTapi to create one array of json
// object named student_result which have properties like Name,
// Roll_no, Division, Percentage & Grade. Once user request for
// “/result” page it displays all student’s data. If user request for
// particular Roll_no then respective students data will display i.e. if
// user request for “/result/2” then data of Roll_no 2 will display

const express=require('express');
const app=express();
const api=require('./api');
app.use('/api',api);
app.listen(3000);