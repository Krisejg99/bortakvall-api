/**
 * Router Template
 */
import express from 'express'
import { body } from 'express-validator'
import { index, show, store, update, destroy } from '../controllers/product_controller'
const router = express.Router()

/**
 * GET /products
 */
router.get('/', index)

/**
 * GET /products/:productId
 */
router.get('/:productId', show)

/**
 * POST /products
 */
router.post('/',
    [
        body('name').isString().bail().isLength({ min: 3, max: 191 }).withMessage('has to be 3-191 chars long'),
    ],
    store)

/**
 * PATCH /products/:productId
 */
router.patch('/:productId', [], update)

/**
 * DELETE /products/:productId
 */
router.delete('/:productId', destroy)

export default router
