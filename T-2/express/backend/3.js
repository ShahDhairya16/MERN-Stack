// Write express JS script to print message in next line splitting by "." and use get method to submit the for data
// 2.html file contains form of text area for the message and submit button. 

express = require ('express');
const app = express();
const path = require ('path');

app.use(express.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname , '../2.html'));
})

app.get('/submit', function(req, res){
    const message = req.query.message;
    const splittedMessage = message.split('.');
    res.send(splittedMessage.join('<br>'));
});

app.listen(1071);                   