const {Router} = require("express")
const {getAllProducts}=require("../controllers/productsController")
const Products=require("../../db/product")
const multer = require("multer")

const productsRouter = Router()



//changing the file name
const storage =multer.diskStorage({

	destination: function(req,file,cb){
		cb(null,'./uploads/');
	},
	filename: function(req,file,cb){
		cb(null, file.originalname)
	}
})
const upload = multer({storage: storage})


//posting products using multer
productsRouter.post("/",upload.single("image"), (req,res)=>{

	const newProduct = new Products({
		name:req.body.name,
		description:req.body.description,
		price:req.body.price,
		category:req.body.category,
		quantity:req.body.quantity,
		created_by:req.body.created_by,
		created_at:req.body.created_at,
		//image:req.file.path
		//Using the image line caused errors.
	})

	Products.create(newProduct);
	res.status(201).json(newProduct)
})

productsRouter.get( '/' , getAllProducts )


module.exports = productsRouter