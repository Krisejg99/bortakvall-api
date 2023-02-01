/**
 * Router Template
 */
import express from 'express'
import { index, show, store, update, destroy, template } from '../controllers/product_controller'
import { createProductRules } from '../validations/product_rules'

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
router.post('/', createProductRules, store)

/**
 * PATCH /products/:productId
 */
router.patch('/:productId', update)

/**
 * DELETE /products/:productId
 */
router.delete('/:productId', destroy)

/**
 * POST /products/template
 */
router.post('/template', template)

export default router
