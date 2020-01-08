module.exports = (app) => {
    const jokes = require('../controllers/joke.controller.js')

    app.post('/jokes', jokes.create)

    app.get('/jokes', jokes.findAll)

    app.get('/jokes/:jokeId', jokes.findOne)

    app.put('/jokes/:jokeId', jokes.update)
    
    app.delete('/jokes/:jokeId', jokes.delete)
}