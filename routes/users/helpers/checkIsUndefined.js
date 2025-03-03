function checkIsUndefined(req, res, next){
    if(Object.keys(req.body).length === 0){
    return req.status(500).json({message:"Please fill out the form."})
    }else{
        const errorObj = {}
        res.locals.errorObj = errorObj //local is a storage for res
        next()
    }
}

module.exports = checkIsUndefined