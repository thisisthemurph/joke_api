const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const dbConfig = require('./config/database.config.js')

// Connect to the database
mongoose.connect(dbConfig.uri, {
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
