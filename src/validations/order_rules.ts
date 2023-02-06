/**
 * Order Validations
 */
import { body } from 'express-validator'

export const createOrderRules = [
    body('customer_first_name')
        .isString().withMessage('has to be a string').bail()
        .isLength({ min: 2, max: 191 }).withMessage('has to be 2 - 191 chars'),

    body('customer_last_name')
        .isString().withMessage('has to be a string').bail()
        .isLength({ min: 2, max: 191 }).withMessage('has to be 2 - 191 chars'),
    
    body('customer_address')
        .isString().withMessage('has to be a string').bail()
        .isLength({ min: 3, max: 191 }).withMessage('has to be 3 - 191 chars'),
    
    body('customer_postcode')
        .isString().withMessage('has to be a string').bail()
        .isLength({ max: 6 }).withMessage("can't be more than 6 chars"),
    
    body('customer_city')
        .isString().withMessage('has to be a string').bail()
        .isLength({ min: 2, max: 191 }).withMessage('has to be 2 - 191 chars'),
    
    body('customer_email')
        .isString().withMessage('has to be a string').bail()
        .isEmail().withMessage('has to be a valid email'),

    body('customer_phone')
        .optional()
        .isString().withMessage('has to be a string'),

    body('order_total')
        .isInt({ min: 1 }).withMessage('has to be an integer: 1 or above').bail()
        .not().isString().withMessage('has to be an integer: 1 or above')
        .not().isArray().withMessage('has to be an integer: 1 or above'),

    body('order_items')
        .isArray({ min: 1 }).withMessage('has to be an array[] of objects{} that contain: `product_id`, `qty`, `item_price`, `item_total`'),

    body('order_items.*.product_id')
        .isInt({ min: 1 }).withMessage('has to be an integer: 1 or above').bail()
        .not().isString().withMessage('has to be an integer: 1 or above')
        .not().isArray().withMessage('has to be an integer: 1 or above'),

    body('order_items.*.qty')
        .isInt({ min: 1 }).withMessage('has to be an integer: 1 or above').bail()
        .not().isString().withMessage('has to be an integer: 1 or above')
        .not().isArray().withMessage('has to be an integer: 1 or above'),

    body('order_items.*.item_price')
        .isInt({ min: 1 }).withMessage('has to be an integer: 1 or above').bail()
        .not().isString().withMessage('has to be an integer: 1 or above')
        .not().isArray().withMessage('has to be an integer: 1 or above'),

    body('order_items.*.item_total')
        .isInt({ min: 1 }).withMessage('has to be an integer: 1 or above').bail()
        .not().isString().withMessage('has to be an integer: 1 or above')
        .not().isArray().withMessage('has to be an integer: 1 or above'),
]