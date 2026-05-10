var express = require('express');
var app = express();
const path = require('path');
// const cp = require('cookie-parser');
var es = require('express-session');

// app.use(cp());
app.use(es({
    resave: true,
    saveUninitialized: true,
    secret: '123'
}));

app.get('/', (req, res) => {
    if (req.session.visitCount === undefined) {
      
        req.session.visitCount = 1;
        res.send('<h1>Welcome User!</h1><p>This is your first visit.</p><a href="/">Refresh to see count</a>');
    } else {
        
        req.session.visitCount++;
        res.send('<h1>Welcome Back!</h1><p>You have visited this website ' + req.session.visitCount + ' times.</p><a href="/">Refresh</a>');
    }
});

app.listen(5089)