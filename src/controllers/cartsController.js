const Carts=require("../../db/cart");
const Products=require("../../db/product");
const Users=require("../../db/user");

var ObjectId = require('mongoose').Types.ObjectId;

const addProductToCart = async(req,res)=>{
	const {userId} = req.params;
	const {productId} = req.params;

	let userCart = await Carts.findOne({"userId":ObjectId(userId)});
	const product = await Products.findById({"_id":productId});
	let newCart = {
		...userCart,
		productDetails: {
			productName:product.name,
			quantity:product.quantity,
			totalPrice:product.price
		},
		//userId: userCart.userId,
		//notes: userCart.notes,
		//created_by:userCart.crea
	}
	await Carts.findOneAndUpdate({"userId":userId},newCart);

	res.json(newCart)
}

//done
const getUserCart = async(req,res)=>{
	const {userId} = req.params;
	/*if(!ObjectId.isValid(userId))
	{
		res.json({
			message:"invalid id",
		})
		return;
	}*/

	const cart = await Carts.findOne({"userId":ObjectId(userId)});
	res.json(cart);
}

module.exports = { getUserCart , addProductToCart }
