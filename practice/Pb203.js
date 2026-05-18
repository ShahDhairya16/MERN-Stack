// Write express js script to perform tasks as asked below.
// 1. Create one HTML file which contains two number type input
// fields, one dropdown which contains options to select like (addition,
// subtraction, multiplication, division) and one submit button.
// 2. The input fields must contain the value greater than 0 else it will
// give a message “Please enter the valid number”. Also, user must
// select any type of formula from the dropdown else give a message
// “You have not selected any formula”. (Message will be displayed on
// “/calc” page.)
// 3. If one formula is selected and numbers are entered then Both
// numbers should be stored in cookies which expires in 50 seconds. 
// Respective calculations will be performed on the page “/calc”

const express=require('express');
const app=express();
const cp=require('cookie-parser');
const path=require('path');
app.use(cp());
let staticpath=path.join(__dirname,'index.html');
app.use(express.static(staticpath));
app.use(express.urlencoded({extended:true}));

app.post('/calc',(req,res)=>{
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operation = req.query.operation;
    if(isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0){
        res.send('Please enter the valid number');
        return;
    }   
    if(!operation){
        res.send('You have not selected any formula');
        return;
    }
    res.cookie('num1', num1, { maxAge: 50000 });
    res.cookie('num2', num2, { maxAge: 50000 });
    let result; 
});
app.listen(3000);