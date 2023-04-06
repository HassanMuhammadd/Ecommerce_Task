const Carts=require("../../db/cart");
const Users=require("../../db/user");
var ObjectId = require('mongoose').Types.ObjectId;
const bcrypt = require("bcryptjs")
const jwt =require("jsonwebtoken");

const jwt_secret = "ajkjsajfad14523q5t()[]1[p[a]rsr134afanfjasdaslaaf"

//done
const getUser = async(req,res)=>{
	const {id} = req.params;
	if(!ObjectId.isValid(id))
	{
		res.status(404).json({
			"message":"invalid id",
		})
		return;
	}
	const user = await Users.findById({"_id":ObjectId(id)});
	res.status(200).json(user);
}

//done
const createUser= async(req,res)=>{
	let newUser = req.body;

	if( await Users.findOne({"email": newUser.email}))//email already used
	{
		res.status(404).json({
			message:'email is already used',
		})
		return;
	}


	await Users.create(newUser);
	res.status(201).json(newUser);

	const userForId = await Users.findOne({"email":newUser.email});

	var newCart = await {"userId":userForId._id};
	await Carts.create(newCart);
}

//done
const updateUser = async(req, res) => {
    let { name,email,password,phoneNumber,accountType } = req.body;
    const { id } = req.params;
	if(!ObjectId.isValid(id))
	{
		res.status(404).json({
			"message":"invalid id",
		})
		return;
	}
	if(!password)
	{
		res.status(404).json({
			"message":"Password is Needed.",
		})
		return;
	}
	let oldUser = await Users.findById({"_id":ObjectId(id)});
	const hashedPassword = await bcrypt.hash(req.body.password,10);
	password = hashedPassword
	console.log(password);


	const newUser = {
		id: id,
		name: name || oldUser.name,
		email: email || oldUser.email,
		password: password || oldUser.password,
		phoneNumber: phoneNumber || oldUser.phoneNumber,
		accountType: accountType || oldUser.accountType,
	}
	await Users.findByIdAndUpdate({"_id": ObjectId(id)},newUser);

        res.status(200).json({
			message:"User updated."
		});

}


//done
const deleteUser =async (req,res)=>{
	const {id} = req.params;
	if(!ObjectId.isValid(id))
	{
		res.status(404).json({
			message:"invalid id",
		})
		return;
	}
	await Users.findOneAndDelete({"_id": ObjectId(id)});
	await Carts.findOneAndDelete({"userId":ObjectId(id)});
	res.status(200).json({
		message:"User deleted."
	})
}


const userLogin = async(req,res)=>{
	const {email,password}=req.body;

	const user = await Users.findOne({email});
	if(!user)
	{
		return res.json({error:"User not found"})
	}
	if(await bcrypt.compare(password,user.password))
	{
		const token = jwt.sign({email:user.email},jwt_secret);

		if(res.status(201)){
			return res.send({status:"ok",data:token});
		}else
		{
			return res.json({error:"error"});
		}
	}
	res.json({status:"Error",error:"Invalid password"});
}

const userVerification = async(req,res)=>{
	const {token} = req.body;
	try{
		const user = jwt.verify(token,jwt_secret);
		const userEmail = user.email
		await Users.findOne({email:userEmail})
		.then((data)=>{
			res.send({status:"ok", data:data})
		})
		.catch((error)=>{
			res.send({status:"error",data:error})
		})
	}catch(error){
		res.send({status:"error",data:error})
	}
}
module.exports = {  createUser , updateUser , deleteUser , getUser , userLogin , userVerification }

