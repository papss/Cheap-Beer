// Load dependencies:
const express = require('express');
const request = require('request');
const handlebars = require('handlebars');

// app access key:
var accessKey = 'MDpkYTdiOTBmOC0yMzI3LTExZTgtYjE4NS0xZmY1OWQ5NTRhZjQ6cWsxcmw4RzdVM3pHRG1ZVXlvem8weG9IRE9ZTDZmS0tVS2kz';

// initialize express app:
const app = express();

// serve static files (html, css, js) from public directory:
app.use(express.static(__dirname + '/public'));

// render index:
app.get('/', function(req, res) {
  res.render('index')
});

// GET list of LCBO products:
app.get('/products', function(req, res) {

  // target URL + authorization header:
  var productsUrl = {
    url: 'https://lcboapi.com/products?',
    method: 'GET',
    headers: {
      Authorization: 'Token ' + accessKey,
      Accept: 'application/json'
    }
  }

  // App requests JSON response:
  request(productsUrl, function(err, resp, body) {
    body = JSON.parse(body);
    console.log(body);
  })

  res.redirect('/');

})

// start the express server on port 8000:
app.listen(8000, () => console.log('app listening on port 8000'));
