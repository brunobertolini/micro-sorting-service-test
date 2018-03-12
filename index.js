const config = require('./config/sort')
const data = require('./data/books')

const sorting = require('./app/sorting')

module.exports = (req, res) =>
	sorting(data, config)
