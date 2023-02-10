const Products=require('../../db/product');
var ObjectId = require('mongoose').Types.ObjectId;

const createProduct = async(req,res)=>{
	const newProduct = req.body;
	await Products.create(newProduct);
	res.status(201).json(newProduct)
}

module.exports = {createProduct}