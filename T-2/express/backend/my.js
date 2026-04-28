const express = require('express');
const app = express();

app.set('view engine','ejs');

const path = require('path');
app.set('views',path.join(__dirname));
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.render('form');
});
app.post('/submit',(req,res)=>{
    const name = req.body.name;
    const marks = req.body.marks;
    res.render('result',{name:name,marks:marks});
});

app.listen(3003);