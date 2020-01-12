module.exports = (app) => {
    const jokes = require('../controllers/joke.controller.js')

    app.route('/jokes')
        .post(jokes.create)
        .get(jokes.findAll)

    app.get('/jokes/random', jokes.findOneRandom)

    app.route('/jokes/:jokeId')
        .get(jokes.findOne)
        .put(jokes.update)
        .delete(jokes.delete)
}