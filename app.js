"use strict";

//Modules
var express = require('express');
var app = express();
var request = require('request');

// Configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static("public"));

// Routes
app.get('/', function(req, res){
  res.render('index', {data: null});
});

app.get('/search', function(req, res){
  var suggestUrl = 'http://terminal2.expedia.com:80/x/suggestions/regions?query='+req.query.searchTerm+"&apikey=6weV4ksGIJ5eQhd58o2XTDwVo35lZf2S";
  request.get(suggestUrl, function (error, response, body) {
    // console.log(body);
    body = JSON.parse(body);
    var searchUrl = "http://terminal2.expedia.com/x/hotels?location=" + body.sr[0].ll.lat + ',' + body.sr[0].ll.lng + "&radius=5km&apikey=6weV4ksGIJ5eQhd58o2XTDwVo35lZf2S";
    // console.log(searchUrl);
    request.get(searchUrl, function (error, response, searchBody) {
      // res.send(JSON.parse(searchBody));
      res.render('index', {data: JSON.parse(searchBody)});
    });
  });
});
app.listen(3000);