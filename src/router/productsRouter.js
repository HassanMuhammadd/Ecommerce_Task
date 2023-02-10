const {Router} = require("express")
const {createProduct}=require("../controllers/productsController")

const productsRouter = Router()

productsRouter.post('/products', createProduct )

module.exports = productsRouter