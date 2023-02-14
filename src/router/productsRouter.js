const {Router} = require("express")
const {createProduct, getAllProducts}=require("../controllers/productsController")
const Products=require("../../db/product")
const multer = require("multer")

const productsRouter = Router()


//productsRouter.post('/products', createProduct )

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
productsRouter.post("/products",upload.single("image"), (req,res)=>{

	const newProduct = new Products({
		name:req.body.name,
		description:req.body.description,
		price:req.body.price,
		category:req.body.category,
		quantity:req.body.quantity,
		created_by:req.body.created_by,
		created_at:req.body.created_at,
		image:req.file.path
	})

	Products.create(newProduct);
	res.status(201).json(newProduct)
})

productsRouter.get( '/products' , getAllProducts )


module.exports = productsRouter