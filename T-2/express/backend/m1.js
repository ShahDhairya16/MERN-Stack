const express = require('express');
const multer = require('multer');
const app = express();
const mlt = multer();

app.use(express.static(__dirname,{index:'m1.html'}));

var store = multer.diskStorage({
    // destination: "LJU",
    destination: "Multiple",
    filename: function (req, file, cb) {
    //   cb(null, file.originalname)
    cb(null, file.fieldname + '-' + Date.now())
    }
  })
  
  var upload = multer({ storage: store });

app.post('/upload', upload.array('mpic',5), (req, res) => {
    const files = req.files;
    if (files) {
        res.set('content-type', 'text/html');
        for (i of files) {
            res.write(`<h1>${i.originalname} uploaded successfully</h1>`);
        }
        res.end();
        }
});
app.listen(3000);