const Products=require('../../db/product');
//var ObjectId = require('mongoose').Types.ObjectId;
const multer = require("multer")
const upload = multer({dest: 'uploads/'})

//done
const createProduct = async( req,res)=>{
	const newProduct = req.body;
	await Products.create(newProduct);
	res.status(201).json(newProduct)
}

//done without sorting
const getAllProducts = async(req,res)=>{
	const products = await Products.find({});
	res.json(products);
}

module.exports = {createProduct , getAllProducts}