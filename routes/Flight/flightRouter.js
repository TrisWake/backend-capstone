const express = require('express')
const flightSearch = require('./flightController')
const router = express.Router()

router.get('/search-flights', flightSearch)


module.exports = router