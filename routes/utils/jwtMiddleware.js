const jwt = require('jsonwebtoken')

async function checkJwtToken(req, res, next){
try {
    const token = req.headers.authorization.substring(7)
    const decodedJwt = jwt.verify(token, process.env.PRIVATE_JWT_KEY)
    res.locals.decodedJwt = decodedJwt
    console.log(decodedJwt)
    next()
} catch (error) {
    res.status(500).json({message: error.message, error: error})
}
}



module.exports = checkJwtToken