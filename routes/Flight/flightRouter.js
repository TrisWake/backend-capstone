const express = require('express')
const flightSearch = require('./flightController')
const router = express.Router()

router.post('/search-flights', flightSearch)


module.exports = router