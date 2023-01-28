/**
 * Router Template
 */
import express from 'express'
import { body } from 'express-validator'
import { index, show, store, update, destroy } from '../controllers/order_item_controller'
const router = express.Router()

/**
 * GET /order_items
 */
router.get('/', index)

/**
 * GET /order_items/:order_itemId
 */
router.get('/:order_itemId', show)

/**
 * POST /order_items
 */
router.post('/', [], store)

/**
 * PATCH /order_items/:order_itemId
 */
router.patch('/:order_itemId', [], update)

/**
 * DELETE /order_items/:order_itemId
 */
router.delete('/:order_itemId', destroy)

export default router
