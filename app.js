const express = require('express')
const bodyParser = require('body-parser')

app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Connect to the database
require('./db.js')

// Set up the routes for /jokes
require('./app/routes/joke.routes.js')(app)

module.exports = app
