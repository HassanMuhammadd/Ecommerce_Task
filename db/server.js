const mongoose = require("mongoose");
//import { mongoose } from "mongoose";

async function databaseCall(){
	await mongoose.connect('mongodb://127.0.0.1/ecom', () => {
        console.log("connected to database");
    });
}
databaseCall();