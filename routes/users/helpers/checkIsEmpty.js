// check to see if all req.body keys have value length
const checkIsEmpty=(req, res, next)=>{
    const {errorObj} = res.locals
    for(let key in req.body){
        if(req.body[key].length === 0){
            errorObj[key] = `${key} cannot be empty`
        }
    }if(Object.keys(errorObj).length > 0){
        req.status(500).json({message:"Failure", payload: errorObj})
    }else{
        next()
    }
}

module.exports = checkIsEmpty