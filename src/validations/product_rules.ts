
/**
 * Product Validations
 */
import { body } from 'express-validator'

export const createProductRules = [
    body('name').isString().withMessage('has to be a string').bail().isLength({ min: 3, max: 191 }).withMessage('has to be 3 - 191 chars long'),
    body('description').isString().withMessage('has to be a string').bail().isLength({ min: 3 }).withMessage('has to be at least 3 chars long'),
    body('price').isInt().withMessage('has to be a number').bail().not().isString().withMessage('has to be a number without quotation marks'),
    body('images').isObject().withMessage('has to be an object in JSON format'),
    body('stock_status').isString().withMessage('has to be a string'),
    body('stock_quantity').isInt().withMessage('has to be a number').bail().not().isString().withMessage('has to be a number without quotation marks'),
]