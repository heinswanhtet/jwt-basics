const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')

const login = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        throw new BadRequestError('Please provide username and password')
    }

    const id = new Date().getDate()

    const token = jwt.sign(
        { id, username },
        process.env.JWT_SECRET,
        { expiresIn: '15d' }
    )

    res.status(StatusCodes.OK).json({ msg: 'Yeah! Successfully user created', token })
}

const getCats = async (req, res) => {
    res.status(StatusCodes.OK).json({ msg: `Hello, ${req.user.username}`, cats: 'Theses are your cats: 😸😺😼' })
}

module.exports = {
    login,
    getCats
}