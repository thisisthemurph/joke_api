module.exports = (app) => {
    const jokes = require('../controllers/joke.controller.js')
    const authenticate = require('../../authenticate.js')

    app.route('/jokes')
        .post(authenticate, jokes.create)
        .get(jokes.findAll)

    app.get('/jokes/random', jokes.findOneRandom)

    app.route('/jokes/:jokeId')
        .get(jokes.findOne)
        .put(authenticate, jokes.update)
        .delete(authenticate, jokes.delete)
}
