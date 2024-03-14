const express = require('express')
const router = express.Router()
const { login, getCats } = require('../controllers/main')

router.route('/login').get(login)
router.route('/cats').get(getCats)

module.exports = router