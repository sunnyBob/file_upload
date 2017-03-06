var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "/public")))
app.use('/photos', require('./route/router'))

app.listen(3000, function() {
	console.log("listen on 127.0.0.1:3000")
})