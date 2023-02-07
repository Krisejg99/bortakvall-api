/**
 * Product Validations
 */
import { body } from 'express-validator'
import { isValidStockQuantity } from './custom_validations/product_custom_val'

export const createProductRules = [
    body('name')
        .isString().withMessage('has to be a string').bail()
        .isLength({ min: 3, max: 191 }).withMessage('has to be 3 - 191 chars long'),
    
    body('description')
        .isString().withMessage('has to be a string').bail()
        .isLength({ min: 3 }).withMessage('has to be at least 3 chars long'),
    
    body('price')
        .isInt({ min: 1 }).withMessage('has to be a number: at least 1').bail()
        .not().isString().withMessage('has to be a number: at least 1')
        .not().isArray().withMessage('has to be a number: at least 1').bail(),

    body('on_sale')
        .optional()
        .isBoolean().withMessage('has to be a boolean, `true` or `false`').bail()
        .not().isString().withMessage('has to be a boolean, `true` or `false`')
        .not().isArray().withMessage('has to be a boolean, `true` or `false`'),
    
    body('images')
        .isObject().withMessage('has to be an object in JSON format'),

    body('images.thumbnail')
        .isString().withMessage('has to be a string').bail()
        .isLength({ min: 3 }).withMessage('has to be 3 chars long'),

    body('images.large')
        .isString().withMessage('has to be a string').bail()
        .isLength({ min: 3 }).withMessage('has to be 3 chars long'),
    
    body('stock_status')
        .isString().withMessage('has to be a string').bail()
        .isIn([ 'instock', 'outofstock' ]).withMessage('has to be `instock` or `outofstock`'),
    
    body('stock_quantity')
        .custom(isValidStockQuantity).bail()
        .not().isString().withMessage('has to be `null`, `0` or a positive integer')
        .not().isArray().withMessage('has to be `null`, `0` or a positive integer').bail()
        .not().contains('.').withMessage('has to be an integer'),
]