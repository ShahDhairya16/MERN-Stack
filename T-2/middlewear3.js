/*
1) Create a middlewear that logs a message indicating that a student has entered the campus whenever the request is made.
2) Create another middlewear that checks if the student has a valid ID card. If the ID card is valid, store the student name in request object and continue the process; otherwise, stop the process qwith a message "Access Denied:
3) Create a get route "/student" that sends a welcome message to the student using the name stored in the request object by the previous middlewear.
*/
const express = require('express');
const app = express();

const entryMiddleware =((req,res,next)=>{
    console.log("A student has entered the campus.");
    next();
})

const idCardMiddleware = ((req,res,next)=>{
    const idCard = true
    if(idCard){
        req.studentName = "Dhairya";
        next();
    }   else {
        res.Write("Access Denied");
        next();
    }
})
app.use('/student',entryMiddleware , idCardMiddleware);
app.get('/student',(req,res)=>{
    res.send(`Welcome, ${req.studentName}!`);
})
app.listen(8013);