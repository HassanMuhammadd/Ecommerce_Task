const {Router} = require("express")
const { getUserCart , addProductToCart , deleteProductFromCart }=require("../controllers/cartsController")

const cartsRouter = Router()

cartsRouter.get('/users/:userId/cart', getUserCart )
cartsRouter.post('/users/:userId/carts/:productId', addProductToCart )
cartsRouter.delete('/users/:userId/carts/:productId', deleteProductFromCart )


module.exports = cartsRouter