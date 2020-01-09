const JokeModel = require('../models/joke.model.js')

exports.create = (req, res) => {
    // Validate the request
    if (!req.body.text) {
        return res.status(400).send({
            message: 'Joke text cannot be empty'
        })
    }

    JokeModel.findOne({text: req.body.text})
        .then(jokeExists => {
            if (jokeExists) {
                res.status(500).send({
                    message: 'The joke already exists in the database'
                })
            } else {
                // We'll try to add the new joke to the database
                const joke = new JokeModel({
                    title: req.body.title || null,
                    text: req.body.text,
                    adult: req.body.adult || false
                })
                
                joke.save()
                    .then(data => {
                        res.send(data)
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || 'An error has occurred whilst creating the joke'
                        })
                    })
            }
        })
}

exports.findAll = (req, res) => {
    JokeModel.find()
        .then(jokes => {
            res.send(jokes)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'An error has occurred whilst retrieving the jokes'
            })
        })
}

exports.findOne = (req, res) => {
    JokeModel.findById(req.params.jokeId)
        .then(joke => {
            res.send(joke)
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'No joke found with id ' + req.params.jokeId
                })
            }

            return res.status(500).send({
                message: 'Error retrieving a joke with the id ' + req.params.jokeId
            })
        })
}

exports.findOneRandom = (req, res) => {
    JokeModel.countDocuments().exec((err, count) => {
        let random = Math.floor(Math.random() * count)
        JokeModel.findOne().skip(random).exec((err, result) => {
            if (!result) {
                return res.status(404).send({
                    message: 'It was not possible to return a random joke'
                })
            }

            return res.send(result)
        })
    }) 
}

exports.update = (req, res) => {
    // Validate the request
    if (!req.body.text) {
        return res.status(400).send({
            message: 'Joke text cannot be empty'
        })
    }

    JokeModel.findByIdAndUpdate(req.params.jokeId, {
        title: req.body.title || null,
        text: req.body.text,
        adult: req.body.adult || false
    }, {
        new: true
    })
        .then(joke => {
            if (!joke) {
                return res.status(404).send({
                    message: 'No joke found with id ' + req.params.jokeId
                })
            }

            res.send(joke)
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'No joke found with id ' + req.params.jokeId
                })
            }

            return res.status(500).send({
                message: 'Error retrieving a joke with the id ' + req.params.jokeId
            })
        })
}

exports.delete = (req, res) => {
    JokeModel.findByIdAndRemove(req.params.jokeId)
        .then(joke => {
            if(!joke) {
                return res.status(404).send({
                    message: "Joke not found with id " + req.params.jokeId
                });
            }

            res.send({message: "Joke deleted successfully!"});
        })
        .catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Joke not found with id " + req.params.jokeId
                });                
            }

            return res.status(500).send({
                message: "Could not delete joke with id " + req.params.jokeId
            });
        })
}