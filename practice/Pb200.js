// You have been assigned to develop a user feedback form for a website
// using Express.js and cookies. Implement the following requirements:
//  Process a form with the following fields: Name, Email , Message , Rating
// (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user
// submits the form, store their feedback information (name, email, message,
// and rating) in a cookie named "feedback" that expires in 10 seconds.
// Display a confirmation message to the user after successfully submitting the
// form & Create a link to display the feedback details stored in the "feedback"
// cookie. When the user click to the link, retrieve the feedback information
// from the cookie and display it on the page also include a link on the
// feedback details page to Logout. When the user clicks the link, user
// redirected to home page. Make app.js file use get method in express js. No
// need to write html file having form elements.

const express=require('express');
const app=express();
const cp=require('cookie-parser');
app.use(cp());
app.get('/',(req,res)=>{
    res.send(`
        <form action="/submit" method="get">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>  
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" required></textarea><br><br>
            <label>Rating:</label><br>
            <input type="radio" id="bad" name="rating" value="Bad" required>
            <label for="bad">Bad</label><br>    
            <input type="radio" id="average" name="rating" value="Average">
            <label for="average">Average</label><br>
            <input type="radio" id="good" name="rating" value="Good">
            <label for="good">Good</label><br>
            <input type="radio" id="verygood" name="rating" value="Very Good">
            <label for="verygood">Very Good</label><br>
            <input type="radio" id="excellent" name="rating" value="Excellent">
            <label for="excellent">Excellent</label><br><br>
            <input type="submit" value="Submit">
        </form>

        `);
    });
    app.get('/submit',(req,res)=>{
        const feedback={
            name:req.query.name,
            email:req.query.email,
            message:req.query.message,
            rating:req.query.rating
        }
        res.cookie('feedback',JSON.stringify(feedback),{maxAge:10000});
        res.send(`
            <h4> Feedback submitted successfully! </h4>
            <a href="/feedback">View Feedback Details</a>`)
    })
    app.get('/feedback',(req,res)=>{
        const feedback = req.cookies.feedback;
        if(feedback){
            const feedbackData = JSON.parse(feedback);
            res.send(`
                <h2>Feedback Details</h2>
                <p>Name: ${feedbackData.name}</p>
                <p>Email: ${feedbackData.email}</p>
                <p>Message: ${feedbackData.message}</p>
                <p>Rating: ${feedbackData.rating}</p>
                <a href="/">Logout</a>
            `);
        } else{
            res.send(`
                <h4>No feedback found or feedback has expired.</h4>
                <a href="/">Go Back</a>
            `);
        }
    })

app.listen(2001);