//import {Schema , model} from "mongoose";
const {Schema, model} = require("mongoose");



const productSchema = new Schema({
	name: {
		type:String,
		required:true,
	},
	image:{
		type:String,
		contentType:String
	},
	description: {
		type:String,
	},
	price: {
		type:Number,
		required:true,
	},
	category: {
		type:String,
		required:true,
	},
	quantity:{
		type:Number,
	},
	created_by:{
		type:String
	},
	created_at:{
		type:String,
	}

})

const Products = model("products", productSchema);
module.exports = Products;
