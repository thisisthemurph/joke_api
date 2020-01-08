const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const dbConfig = require('./config/database.config.js')
const jokeRoutes = require('./app/routes/joke.routes.js')

app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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

// Connect to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Successfully connected to the database')
}).catch(err => {
    console.log('Could not connect to the database')
    console.log(err)
    process.exit()
})