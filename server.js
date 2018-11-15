var express = require('express');
var textract=require('textract');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');
    next();
  });



app.post('/documents', (req, res) => {
    console.log('****************jhdkjh*************'+JSON.stringify(req.body));
     textract.fromFileWithPath('./sample1.docx', function( error, text ) {
        console.log(text);
        res.send(text);
    })
     //fileread();
   // console.log(req);
   /* var Device = Devices.findById(id).then((res) => {
        return res;
    })
*/   // console.log('##################Device@@@@@@@@@'+JSON.stringify(Device));
})
app.get('/documents', (req, res) => {
    console.log('*****************READ************'+JSON.stringify(req.params));
   /* var Device = Devices.findById(id).then((res) => {
        return res;
    })
*/   // console.log('##################Device@@@@@@@@@'+JSON.stringify(Device));
})
app.listen(3002, ()=> {
    console.log('started server');
} )