const Products=require('../../db/product');
const multer = require("multer")
const upload = multer({dest: 'uploads/'})


//done without sorting
const getAllProducts = async(req,res)=>{
	const products = await Products.find();
	res.status(200).json(products);
}

module.exports = {getAllProducts}