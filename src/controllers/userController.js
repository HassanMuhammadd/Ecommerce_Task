const Carts=require("../../db/cart");
const Users=require("../../db/user");
var ObjectId = require('mongoose').Types.ObjectId;

//done
const getUser = async(req,res)=>{
	const {id} = req.params;
	if(!ObjectId.isValid(id))
	{
		res.json({
			"message":"invalid id",
		})
		return;
	}
	const user = await Users.findById({"_id":ObjectId(id)});
	res.json(user);
}

//done
const createUser= async(req,res)=>{
	const newUser = req.body;

	if( await Users.findOne({"email": newUser.email}))//email already used
	{
		res.json({
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
    const { name,email,password,phoneNumber,accountType } = req.body;
    const { id } = req.params;
	if(!ObjectId.isValid(id))
	{
		res.json({
			"message":"invalid id",
		})
		return;
	}
	let oldUser = await Users.findById({"_id":ObjectId(id)});
	const newUser = {
		id: id,
		name: name || oldUser.name,
		email: email || oldUser.email,
		password: password || oldUser.password,
		phoneNumber: phoneNumber || oldUser.phoneNumber,
		accountType: accountType || oldUser.accountType,
	}
	await Users.findByIdAndUpdate({"_id": ObjectId(id)},newUser);

        res.json({
			message:"User updated."
		});

}


//done
const deleteUser =async (req,res)=>{
	const {id} = req.params;
	if(!ObjectId.isValid(id))
	{
		res.json({
			message:"invalid id",
		})
		return;
	}
	await Users.findOneAndDelete({"_id": ObjectId(id)});
	await Carts.findOneAndDelete({"userId":ObjectId(id)});
	res.json({
		message:"User deleted."
	})
}

module.exports = {  createUser , updateUser , deleteUser , getUser }


/*User.find({ returns an array
		"category":req.params.category
	})*/

	/*User.findOne({ // obj

	})*/

	/*User.findById()*/ //obj

	//users.push(newUser);