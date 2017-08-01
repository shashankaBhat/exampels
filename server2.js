var express = require('express')
var connect= require('connect')
var path = require('path')
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://localhost:27017/todo?auto_reconnect', {safe:true});
var routes = require('./routes');
var app = express();


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev')); 										// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json

app.use(express.static(path.join(__dirname, 'angularjs')));


app.get('/', routes);
app.all('*', function(req, res){
  res.status(404).send();
})

app.listen(3000, function(){
 console.log('Express server listening on port 3000')
})
