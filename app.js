// Load dependencies:
const express = require('express');
const request = require('request');
const handlebars = require('handlebars'); 

// app access key:
var accessKey = 'MDpkYTdiOTBmOC0yMzI3LTExZTgtYjE4NS0xZmY1OWQ5NTRhZjQ6cWsxcmw4RzdVM3pHRG1ZVXlvem8weG9IRE9ZTDZmS0tVS2kz';

// initialize express app:
const app = express();

// target public/index.html:
app.use(express.static(__dirname + '/public'));

// GET list of LCBO products:
app.get('/products', function(req, res) {
  res.redirect('https://lcboapi.com/products?access_key=' + accessKey);
})

// start the express server on port 8000:
app.listen(8000, () => console.log('app listening on port 8000'));
