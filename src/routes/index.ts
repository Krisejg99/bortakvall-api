import express from "express"
import product_router from './product_router'
import order_router from './order_router'
import order_item_router from './order_item_router'

// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send({
		message: "I AM API, BEEP BOOP",
	})
})

router.use('/products', product_router)
router.use('/orders', order_router)
router.use('/order_items', order_item_router)

export default router
