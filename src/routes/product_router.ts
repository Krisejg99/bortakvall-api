/**
 * Router Template
 */
import express from 'express'
import { index, show, store, template } from '../controllers/product_controller'
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
 * POST /products/template
 */
router.post('/template', template)

export default router
