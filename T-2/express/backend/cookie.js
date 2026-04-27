var cp = require('cookie-parser');
var express = require('express');
var app = express();
app.use(cp())
app.get('/',(req,res)=>{
    res.cookie('name','express')
    res.cookie('fname','JS');
    res.cookie('ID','2',{'expires':new Date(Date.now()+2000)});
    res.cookie('email','dhairyashah332@gmail.com',{maxAge:2000});
    res.send(req.cookies)
})
app.listen(5008)