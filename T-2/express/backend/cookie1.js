//1) Create a HTMl which contains feild fn,ln,pass,submit.
//2) Once form submitted, store all this entred value to the repected cookie on '/next page and redirect user to '/admin' page and clear the cookie set for last name
// Display remaining set cookie value on the page use post method 

const cp = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const staticPath = path.join(__dirname, '../frontend');
app.use(express.urlencoded({extended:true}));
app.use(express.static(staticPath));
app.use(cp());
app.post('/next',(req,res)=>{
    res.cookie('fn',req.body.fn);
    res.cookie('ln',req.body.ln);
    res.cookie('pass',req.body.pass);
    res.redirect('/admin');
})      
app.get('/admin',(req,res)=>{
    res.clearCookie('ln');
    res.write(req.cookies.fn);
    res.write(req.cookies.pass);
    res.end();

})
app.listen(5011)