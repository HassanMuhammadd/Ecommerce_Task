//import {Schema , model} from "mongoose";
const {Schema,model} = require("mongoose");
const Carts=require("./cart");


//const mongoose = require("mongoose")
//import { mongoose } from "mongoose";
//import { Schema } from 'mongoose';
//const bcrypt = require("bcryptjs")

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

const Users = model("users", userSchema);
module.exports = Users;
//await User.create(row to be inserted)*/