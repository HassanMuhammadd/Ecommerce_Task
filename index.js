const mongoose = require("mongoose");
const User  = require('./db/user');
const express = require('express');
const userRouter =require('./src/router/userRouter');
const productsRouter=require("./src/router/productsRouter");
const cartsRouter=require("./src/router/cartsRouter");
const cors = require("cors");


mongoose.set('strictQuery',false);
async function databaseCall(){
	await mongoose.connect('mongodb://127.0.0.1/ecom', () => {
		console.log("connected to database");
    });
}

databaseCall();
const app = express();

//to make the uploads folder publicly visible
app.use(cors());
app.use(express.static('uploads'));

app.use(express.json());
app.use('/users',userRouter);
app.use('/products',productsRouter);
app.use('/users',cartsRouter);

app.listen(5000,()=>{
	console.log('listening to 5000');
})