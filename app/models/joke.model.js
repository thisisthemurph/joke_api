const mongoose = require('mongoose')

const JokeSchema = mongoose.Schema({
    title: String,
    text: String,
    adult: Boolean
}, { timestamps: true })

module.exports = mongoose.model('Joke', JokeSchema)