var express = require('express')
var connect= require('connect')
var path = require('path')

var app= express()

app.use(express.static(path.join(__dirname, 'angularjs')));

app.listen(3000, function(){
 console.log('Express server listening on port 3000')
})
