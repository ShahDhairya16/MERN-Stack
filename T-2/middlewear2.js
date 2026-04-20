/*
Design Node js application using express to satisfy the following requirements:
1) The first middlewear should display a message "First Function Executed".
2) The Second middlewear should display a message "Second Function Executed".
3) The Third middlewear should perform a simple airthmetic operation and store the result in request object,then display it in console.
4) Apply all 3 middlewears function in sequence to s single route "/class". 
Final respond should be Thank you message to the user.
 */

const express = require('express');
const app = express();

const firstMiddleware = (req, res, next) => {
    console.log("First Function Executed");
    next();
}
const secondMiddleware = (req, res, next) => {
    console.log("Second Function Executed");
    next();
}
const ThirdMiddleware = (req, res, next) => {
    req.total = 5+10;
    console.log(`The result of the arithmetic operation is: ${req.total}`);
    next();
}
app.get('/class',firstMiddleware,secondMiddleware,ThirdMiddleware,(req,res)=>{
    res.write("Thank you for visiting the class route!");
    res.end();
})
app.listen(8009);