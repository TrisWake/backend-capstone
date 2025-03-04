const express = require('express')
const router = express.Router()
const { createUser, login, getUser, updateUser, deleteUser } = require('./controller/userController')
const checkIsEmpty = require('./helpers/checkIsEmpty')
const checkIsUndefined = require('./helpers/checkIsUndefined')
const { checkIsAlpha, checkIsAlphanumeric, checkIsEmail } = require('./helpers/validationMiddleware')
const checkJwtToken = require('../utils/jwtMiddleware')

// Route for creating a user
router.post('/create-user', 
    checkIsUndefined, 
    checkIsEmpty, 
    checkIsAlpha, 
    checkIsAlphanumeric, 
    checkIsEmail, 
    createUser
)

// Route for getting user by ID, with JWT authentication
router.get('/get-user-by-id/:id', checkJwtToken, getUser)

// Route for updating user by ID
router.put('/update-user-by-id/:id', updateUser)

// Route for deleting a user
router.delete('/delete-user', deleteUser)

// Route for user login
router.post('/login',
    checkIsUndefined, // check if req.body has keys
    checkIsEmpty, // check if the keys have length
    checkIsEmail,
    login
)




module.exports = router