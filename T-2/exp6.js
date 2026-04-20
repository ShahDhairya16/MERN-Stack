/* Write express JS script to perform the task as asked below
1) Add one formwhich contains user id, password and submit button.Data should be submitted by http post method.
2) On home page form should be displayed and while submitting the form,on next page "/login", if user name is admin then t will display welcome admin
else display "Please login with Admin name" in red color.
*/

const express = require('express');
const app = express();
// app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send(`
            <form action= '/login' method= "get">
                <input type="text" name="username" placeholder="Enter your name">
                <input type="password" name="password" placeholder="Enter your password">
                <button type="submit">Submit</button>
            </form>
    `);
})
app.get('/login',(req,res)=>{

    if( req.query.username == 'admin'){
        res.send(`Welcome, ${req.query.username}!`);
    } else {
        res.send(`<div style="color:red;">Please login with Admin name</div>`);
    }
})

app.listen(8005);