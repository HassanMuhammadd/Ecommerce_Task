const mongoose = require("mongoose");
//import {mongoose} from "mongoose";
const User  = require('./db/user');
//import {User} from '../db/user'
const express = require('express');
//import { express } from "express";
const userRouter =require('./src/router/userRouter');
const productsRouter=require("./src/router/productsRouter");
const cartsRouter=require("./src/router/cartsRouter");
//import userRouter from "../src/router/userRouter";

mongoose.set('strictQuery',false);
async function databaseCall(){
	await mongoose.connect('mongodb://127.0.0.1/ecom', () => {
        console.log("connected to database");
    });
}

databaseCall();

const app = express();
app.use(express.json())

app.use('/',userRouter);
app.use('/',productsRouter);
app.use('/',cartsRouter);

app.listen(3000,()=>{
	console.log('listening to 3000');
})