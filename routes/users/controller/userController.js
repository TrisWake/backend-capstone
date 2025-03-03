const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createUser = async(req, res)=>{
    const {firstName, lastName, email, username, password} = req.body
    const {errorObj} = res.locals
    try {
        if(Object.keys(errorObj).length > 0){ //how to check the keys
            res.status(500).json({message: errorObj})
        }else{
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = new User({
                firstName, //alphabetical
                lastName,
                email, //valid email
                password: hashedPassword,
                username //no symbols
            })
            await newUser.save()
            res.json({message:"User Created.", payload: newUser})
    } 
    }catch (error) {
        res.status(500).json({message:"Server Error", error: error.message})
    }
}



const getUser = async(req, res)=>{
    try {
        const {id} = req.params
        if(id !== res.locals.decodedJwt.id){
            res.status(400).json({message: "Unathorized Request"})
        }else{
            const foundUser = await User.findOne({_id:id})
            if(foundUser){
                res.json({message:"user found", payload: foundUser})
            }else{
                res.json({message: "User not found"})
            }
        }
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error})
    }
}

const updateUser = async(req, res)=>{
    try {
        const {id} = req.params
        const user = await User.find(u => u.id === id)
    } catch (error) {
        res.status(500).json({message:"Server Error", error})
    }
}

const deleteUser = async(req, res)=>{
    try {
        const {id} = req.params
        const user = await User.remove({User:id})
    } catch (error) {
        
    }
}


const login = async (req, res)=>{
    const {email, password} = req.body
    const {errorObj} = res.locals
    if(Object.keys(errorObj).length > 0){ 
        res.status(500).json({message: errorObj})
    }else{
        try {
            const foundUser = await User.findOne({email}) //the same as ({email : email})
            if(!foundUser){
                res.status(400).json({
                    message:"Login failed.", 
                    payload: "Please check your email and password"
                })
            }else {
                const passwordMatch = await bcrypt.compare(password, foundUser.password)
                if(!passwordMatch){
                    res.status(400).json({
                        message:"Login failed.", 
                        payload: "Please check your email and password"
                })
                }else{
                    const jwtToken = jwt.sign(
                        {
                            email: foundUser.email,
                            username: foundUser.username,
                            id: foundUser._id,
                        },
                        process.env.PRIVATE_JWT_KEY,
                        {
                            expiresIn:"1d"
                        }
                    )
            res.json({message: "User found", payload: jwtToken})
            }
        } 
    }catch (error) {
            res.status(500).json({message:"Server Error", error})
        }
    }

}
module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    login
}