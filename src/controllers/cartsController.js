const Carts=require("../../db/cart");
const Products=require("../../db/product");

var ObjectId = require('mongoose').Types.ObjectId;


//quantity?
const addProductToCart = async(req,res)=>{
	const {userId} = req.params;
	const {productId} = req.params;

	let userCart = await Carts.findOne({"userId":ObjectId(userId)});
	const product = await Products.findById({"_id":productId});

	let pushedProduct = {
		name:product.name,
		quantity:1,
		price: product.price
	}
	pushedProduct = {
		...pushedProduct,
		totalPrice: pushedProduct.quantity * pushedProduct.price
	}
	let newCart = userCart;
	newCart.products.push(pushedProduct);
	await Carts.findOneAndUpdate({"userId":userId},newCart);

	res.status(201).json(userCart)
}

//done
const deleteProductFromCart = async(req,res)=>{
	const {userId} = req.params;
	const {productId} = req.params;

	let userCart = await Carts.findOne({"userId":ObjectId(userId)});
	const product = await Products.findById({"_id":productId});
	const newProducts = userCart.products.filter(p=>p.name !== product.name);

	userCart.products = newProducts;
	await Carts.findOneAndUpdate({"userId":ObjectId(userId)}, userCart)
	res.status(200).json({
		message:"Products deleted."
	});
}

//done
const getUserCart = async(req,res)=>{
	const {userId} = req.params;

	const cart = await Carts.findOne({"userId":ObjectId(userId)});
	console.log(cart);
	res.status(200).json(cart);
}

module.exports = { getUserCart , addProductToCart , deleteProductFromCart }
