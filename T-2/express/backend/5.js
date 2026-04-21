// Create an HTML form that 

const express = require('express');
const app = express();
const path = require('path');   
const staticPath = path.join(__dirname, '../');
app.use(express.static(staticPath,{index:'3.html'}));
app.post('/submit',(req,res)=>{
    const num = req.body.num1;
    if(!num){
        res.send("Please enter a number <a href='/'>Try again</a>");
    }
    if(isNaN(num)){
        res.send("Invalid Number <a href='/'>Try again</a>")
    }
    const number=Number(num);
    if(number%2 == 0){
        res.send("Even Number <a href='/'>Try again</a>")
    }
     else{
        res.send("Odd Number <a href='/'>Try again</a>")
    }
})

app.listen(1060)