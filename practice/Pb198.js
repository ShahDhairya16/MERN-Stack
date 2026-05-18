// Write a script to meet following requirement using ExpressJS.
// 1. Create index.html which contains login page having fields like
// Username, Password & Gender. Open it on localhost.
// 2. After clicking on submit button, it should jump to savesession
// page. store username & gender in session.
// 3. After saving session, redirect to fetchsession page and read session
// values. Put a logout link button here.
// 4. After clicking logout button, it jumps to deletesession page.
// 5. Destroy the session on this page & redirect to index.html page

const express=require('express');
const app = express();
const es=require('express-session');
app.use(es({secret:'1234',resave:false,saveUninitialized:true}));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post('/savesession',(req,res)=>{
    req.session.username = req.body.username;
    req.session.password=req.body.password;
    req.session.gender=req.body.gender;
    res.redirect('/fetchsession');
})

app.get('/fetchsession',(req,res)=>{
   res.send(`
    Welcome ${req.session.username}<br>
    Password: ${req.session.password}<br>
    Gender: ${req.session.gender}<br>
    <a href="/deletesession">Logout</a>
   `);
   
})

app.get('/deletesession',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
});

app.listen(3001);