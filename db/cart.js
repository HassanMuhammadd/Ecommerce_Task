const {Schema, model} = require("mongoose");
const mongoose = require("mongoose");

const cartSchema = new Schema({
	userId:{
		type : mongoose.Schema.Types.ObjectId,
		ref : 'users',
		required:true
	},
	notes:{
		type:String,
	},
	//array of products in cart
	products:[{
		name:{
			type : String,
		},
		quantity:{
			type:Number,
		},
		totalPrice:{
			type:Number,
		},
	}
],
	created_by:{
		type:String,
	},
	created_at:{
		type:String,
	},
})

const Carts = model("carts",cartSchema);
module.exports = Carts;