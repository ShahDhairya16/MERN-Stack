/*
1) create one HTML file which contains one text feild for name, email feild , and checkbox for subscription.
2) HTML file will be loaded on the home page 
3) on login page welcome user and email id data sould be printed. 
4) If userd checked the subscription the "Thank you for the subscription" message should be printed and logout link will be displayed.
5) If User clicks the logout link then user should be redirected to the home page.
6) If user has not opted subscription then "You can subscribe" Message will be displayed and subscibe link will be displayed. 
7) If user clicks on subscribe link then "Thank you for the subscription" message should be printed and logout link will be displayed.
Use Middlewear function here
*/

var express = require('express');
var app = express();
app.use(express.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.send(`
        <form action="/login" method="post">
            <input type="text" name="name" placeholder="Enter your name"><br><br>
            <input type="email" name="email" placeholder="Enter your email"><br><br>
            <input type="checkbox" name="subscribe" value="yes"> Subscribe<br><br>
            <button type="submit">Login</button>
        </form>
    `)
})
app.post('/login',function(req,res){
    const email = req.body.email;
    const name = req.body.name;
    const subscribe = req.body.subscribe;
    if(subscribe === 'yes'){
        res.send(`Welcome, ${email}! Thankyou for subscribing. <a href="/">Logout</a>`);
    }
    else{
        res.send(`Welcome, ${email}! You can subscribe. <a href="/subscribe">Subscribe</a>`);
        app.get('/subscribe', function(req, res){
            res.send(`Thankyou for subscribing. <a href="/">Logout</a>`);
        })
    }
})

app.listen(1006);