const login = async (req, res) => {
    res.status(200).json({ msg: 'hi' })
}

const getCats = async (req, res) => {
    res.status(200).json({ msg: 'meow!' })
}

module.exports = {
    login,
    getCats
}