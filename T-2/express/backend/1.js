var express= require('express');
var app = express();

const path = require('path');
const staticPath = path.join(__dirname, '../');
app.use(express.static(staticPath,{index:'1.html'}));
app.listen(5001);
