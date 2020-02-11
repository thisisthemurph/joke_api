const axios = require('axios')
const { url } = require('./config/user-auth-api.config.js')

module.exports = (req, res, next) => {
    const email = req.header('email')
    const password = req.header('password')

    const ax = axios.create({
        baseURL: url,
        timeout: 1000
    })

    // Log the account in
    ax.post('/auth/login', { email, password })
        .then(result => next())
        .catch(err => res.sendStatus(403))
}
