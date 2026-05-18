// write a sript to meet foll requirements.
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to
// savesessionpage.store username in session.
// 3) After saving session, redirect to fetchsession page and read session
// value. put a logout link button here.
// 4) destroy the session on this page and redirect to index.html

const express=require('express');
const app=express();
const s=require('express-session');
app.use(s({
    secret:'11234',
    resave:false,
    saveUninitialized:true
}))
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
app.post('/savesession',(req,res)=>{
     req.session.username = req.body.username;
    res.redirect('/fetchsession');
})
app.get('/fetchsession',(req,res)=>{
    res.send(`Welcome ${req.session.username} <a href="/logout">Logout</a>`);
})
app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
})

app.listen(3000);