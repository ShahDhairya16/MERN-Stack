// Write express script to get form data using get method and display data in JSON format in next page named "/process"
var express = require('express');
var app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});
app.use(express.urlencoded({extended:true}));

app.post('/process', function(req, res){
    const data = req.query.fn;
    const name = req.query.ln;
    res.send("Welcome " + data + " " + name);
});
app.listen(1069);