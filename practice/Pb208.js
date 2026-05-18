// create a user signup form using Express.js and cookies. Implement the following
// requirements:
// Create a form with the following fields:
// o Name (input field)
// o Email (input field)
// o Gender (radio buttons: Male, Female, Others)
// o Submit button
// When the user submits the form, store their information (name, email, gender) in a
// cookie named "registered" that expires in 15 seconds.
// Display a confirmation message to the user after successfully submitting the form &
// Create a link to display the details stored in the "registered" cookie.
// When the user clicks to the link, retrieve the information from the cookie and display
// it on the /details page also include a link on the /details page to Logout. When the
// user clicks the link, user redirected to home page.
// Use post method.

const express=require('express');
const app = express();
const path = require('path');
const cp = require('cookie-parser');
app.use(express.urlencoded({extended:true}));
app.use(cp());
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Pb208.html');
})
app.post('/submit',(req,res)=>{
    const registered = {
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender
    }
    res.cookie('registered',JSON.stringify(registered),{maxage:15000});
    res.send(`Registered successfully !<br><br>
         <a href="/details">View Details</a>`);
})
app.get('/details',(req,res)=>{
    const registered = req.cookies.registered;
    res.send(`${registered}<br><br>
        <a href='/'>Logout</a>`);
});
app.get('/logout',(req,res)=>{
    req.ClearCookie('registered');
    res.redirect('/');
})
app.listen(3000);
