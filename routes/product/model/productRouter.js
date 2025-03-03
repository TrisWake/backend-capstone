const express = require('express')
const router = express.Router()
const {createNewProduct, findProductByName} = require('../controller/productController')

router.post('/create-product',createNewProduct)
router.get('/get-item-by-name/:name', findProductByName)

module.exports = router