const express = require('express')
const router = express.Router()
const { login, getCats } = require('../controllers/main')
const authenticationMiddleware = require('../middleware/auth')

router.route('/login').get(login)
router.route('/cats').get(authenticationMiddleware, getCats)

module.exports = router