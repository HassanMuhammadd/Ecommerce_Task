//import {Schema , model} from "mongoose";
const {Schema,model} = require("mongoose");
const Carts=require("./cart");


//const mongoose = require("mongoose")
//import { mongoose } from "mongoose";
//import { Schema } from 'mongoose';
const bcrypt = require("bcryptjs")

const userSchema = new Schema({
	name: {
		type:String,
		required:true,
	},
	email: {
		type:String,
		unique:true,
		required:true,
	},
	password: {
		type:String,
		required:true,
	},
	phoneNumber: {
		type:Number,
	},
	accountType: {
		type:String,
	},
})

userSchema.pre("save",async function(next){
	try{
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(this.password,salt)
		this.password = hashedPassword
		next()
	}
	catch(error){
		next(error);
	}
})


const Users = model("users", userSchema);
module.exports = Users;
//await User.create(row to be inserted)*/