module.exports = (app) => {
    const jokes = require('../controllers/joke.controller.js')

    app.route('/jokes/api')
        .get(jokes.findAll)

    app.get('/jokes/api/random', jokes.findOneRandom)

    app.route('/jokes/api/:jokeId')
        .get(jokes.findOne)
}
