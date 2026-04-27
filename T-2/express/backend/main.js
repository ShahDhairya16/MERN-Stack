var express = require('express');
var app = express();
const api = require('./api');
app.use('/api',api);
app.listen(3002);