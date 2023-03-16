const {Router} = require("express")
const { getUserCart , addProductToCart , deleteProductFromCart }=require("../controllers/cartsController")

const cartsRouter = Router()

cartsRouter.get('/:userId/cart', getUserCart )
cartsRouter.post('/:userId/carts/:productId', addProductToCart )
cartsRouter.delete('/:userId/carts/:productId', deleteProductFromCart )


module.exports = cartsRouter