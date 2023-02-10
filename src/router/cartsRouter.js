const {Router} = require("express")
const { getUserCart , addProductToCart }=require("../controllers/cartsController")

const cartsRouter = Router()

cartsRouter.get('/users/:userId/cart', getUserCart )
cartsRouter.post('/users/:userId/carts/:productId', addProductToCart )
module.exports = cartsRouter