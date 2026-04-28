const express = require('express');
const app = express();

app.set('view engine','ejs');

const path = require('path');
app.set('views',path.join(__dirname));
app.use(express.urlencoded({extended:true}));
app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.post('/submit',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    res.render('messaged',{name:name,email:email});
});

app.listen(3004);