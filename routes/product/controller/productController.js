const Product = require('../model/Product')

const createNewProduct = async (req, res)=>{
    try {
        const newProduct = new Product({productName: req.body.productName})
        await newProduct.save()
        res.json({message: "Successfully created product", payload: newProduct})
    } catch (error) {
        res.status(500).json({message:"Error.", error})
    }   
}

const findProductByName = async (req, res)=>{
    try {
        const {name} = req.params
        const foundProduct = await Product.findOne({productName: name})
        if(foundProduct){
            res.json({message:"Product found", payload: foundProduct})
        }else{
            res.json({message:"Product not found"})
        }
    } catch (error) {
        res.status(500).json({message:"Error.", error})
    }
}

module.exports = {
    createNewProduct,
    findProductByName
}