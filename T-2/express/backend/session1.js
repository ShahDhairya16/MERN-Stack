// Create a index.html file which contains uname and pass 
// after clicking submit button it should jump on '/savesession' page 
// After saving session redirect to fetcg page and read value along with logout link 
// Jump on delete session page after clicking logout link and delete session and redirect to home page

var express = require('express');
var app = express();
const path = require('path');
// const cp = require('cookie-parser');
var es = require('express-session');
const staticPath = path.join(__dirname, '../frontend');
// app.use(express.urlencoded({extended:true}));
app.use(express.static(staticPath));
// app.use(cp());
app.use(es({
    resave:true,
    saveUninitialized:true,
    secret:'123'
}));
app.get("/savesession",(req,res)=>{
    req.session.fns=req.query.fn;
    req.session.lns=req.query.ln;
    req.session.passs=req.query.pass;
    res.redirect('/fetch');
})
app.get('/fetch',(req,res)=>{
    res.set('content-type','text/html');
    console.log(req.sessionID);
    res.write(req.session.fns );
    res.write(req.session.lns);
    res.write(req.session.passs);
    res.write('<a href="/deletesession">Logout</a>');
    res.end();
})
app.get('/deletesession',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
})
app.listen(5013)