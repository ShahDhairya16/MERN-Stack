// write an express.js script to load an HTML file having username and
// password and submit button. On clicking submit button. It should
// jump on "check" page using "POST" method. If username is "admin"
// , then jump on next middleware to print "welcome… admin" , if
// username is not "admin" , then stay on same middleware to print
// "warning msg" in red color.

const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post('/check',(req,res)=>{
    const username = req.body.username;
    if(username == 'admin'){
        res.send('Welcome... admin');
    } else {
        res.send('<p style="color:red;">Warning: Invalid username!</p>');
    }
})
app.listen(8000);
