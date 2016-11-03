var express = require("express")
var app = express()
var http = require("http")
var server = http.createServer(app)
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function (req, res) {
	res.send("Hello World!");
});

app.use(router);

mongoose.connect('mongodb://localhost/tvshows', function (err, res) {
	if (err) {
		console.log('ERROR: connecting to Database. ' + err);
	}
	app.listen(3000, function () {
		console.log("Node server running on http://localhost:3000");
	});
});
mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function (req, res) {
	res.send("Hello World!");
});

app.use(router);

mongoose.connect('mongodb://localhost/tvshows', function (err, res) {
	if (err) {
		console.log('ERROR: connecting to Database. ' + err);
	}
	app.listen(3000, function () {
		console.log("Node server running on http://localhost:3000");
	});
});