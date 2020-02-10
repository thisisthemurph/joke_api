const express = require('express')
const bodyParser = require('body-parser')

const jokeRoutes = require('./app/routes/joke.routes.js')

app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Connect to the database
require('./db.js')

// Define a route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to the Jokes API."})
})

// Set up the routes for /jokes
jokeRoutes(app)

// Listen for requests on the following port
const PORT = 3000
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT)
})
