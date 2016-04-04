'use strict';

var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: "A really good secret!",
    cookie: {}
}));

app.use(function(req, res, next) {
    console.log('req.session:', JSON.stringify(req.session));
    next();
});

app.get('/', function(req, res) {
    res.render('pages/index', {
	name: req.session.name
    });
});

app.post('/store', function(req, res) {
    req.session.name = req.body['name'];
    res.redirect('/');
});

app.post('/clear', function(req, res) {
    req.session.destroy(function(err) {
	if (err) {
	    console.log(err);
	}
	res.redirect('/');
    });
});

var server = app.listen(process.env['PORT'] || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
