const {
    isAlpha,
    isAlphanumeric,
    isEmail
} = require('validator')


const checkIsAlpha = (req, res, next) =>{
    const errorObj = res.locals // grabbing error Obj out of storage
    if(!isAlpha(req.body.firstName) || !isAlpha(req.body.lastName)){
        errorObj.name = "Validation Error. First and Last name must be alphabetical."
    }  
    next()
}

const checkIsAlphanumeric = (req, res, next) =>{
    const errorObj = res.locals // grabbing error Obj out of storage
    if(!isAlphanumeric(req.body.username)){
        errorObj.username = "Validation Error. Username must be alphabetical."
    }  
    next()// runs the next middleware
}

const checkIsEmail = (req, res, next) =>{
    const errorObj = res.locals // grabbing error Obj out of storage
    if(!isAlphanumeric(req.body.email)){
        errorObj.email = "Validation Error. Email must be alphabetical."
    }  
    next()
}



module.exports = {
    checkIsAlpha,
    checkIsAlphanumeric,
    checkIsEmail,
}