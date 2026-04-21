//Create a html file with containe 2 number types input feild and one dropdown to selecect option and submit button
//Input feild must contain data >0 or it will priunt enter valid number 
// also user must select option from dropdown otherwise it will print select option
// on submit it will print the result of the operation in next page named "/calc"
// If one formula is selected and and numbers are eneterd the respective calculation will be performaed on /calc page use http get method

const express = require('express');
const app = express();
const path = require('path');
const staticPath = path.join(__dirname, '../');
app.use(express.static(staticPath));

app.get('/submit', function(req, res){
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const operation = req.query.operation;
    let result;
   if(num1<=0 || num2<=0){
    res.send('Enter Valid Number')
   }
   else if(!operation){
    res.send('Select Option')
   }
   else{
    switch(operation){
        case 'add':
            res.send(`Result: ${num1 + num2}`);
            break;
        case 'subtract':
            res.send(`Result: ${num1 - num2}`);
            break;
        case 'multiply':
            res.send(`Result: ${num1 * num2}`);
            break;
        case 'divide':
            if(num2 === 0){
                res.send('Cannot divide by zero');
            } else {
                res.send(`Result: ${num1 / num2}`);
            }
            break;
        default:
            res.send('Invalid operation');
            break;
    }
   }
});

app.listen(1079);