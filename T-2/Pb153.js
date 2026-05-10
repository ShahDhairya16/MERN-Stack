// Write an expressJS code which loads login.html file upon browsing
// localhost:3010. The Login.html file contains input for
// username,password and two checkboxes named remember and
// subscribe,on submitting the file it should go to /data page where
// username,password and selected checkboxes are pinted,in addition to
// that a logout button should be there,onclicking this button it should
// go back to home page “localhost:3010/”.(GET/POST any method can
// be used)[Write all necessary files code]

const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Pb153.html');
})
app.post('/data',(req,res)=>{
    const name = req.body.username;
    const pass = req.body.password;
    const remember = req.body.remember || 'off';
    const subscribe = req.body.subscribe || 'off';
    
    res.write("Username: " + name + "<br><br>");
    res.write("Password: " + pass + "<br><br>");
    res.write("Remember: " + remember + "<br><br>");
    res.write("Subscribe: " + subscribe + "<br><br>");

    res.write(`
        <form action="/" method="GET">
            <button type="submit">Logout</button>
        </form>
    `);
})
app.listen(3011);