/**
 * Order Validations
 */
import { body, CustomValidator } from 'express-validator'

const isValidOrderTotal: CustomValidator = async total => {
    if (total < 1) {
        return Promise.reject("has to be at least 1")
    }
}

export const createOrderRules = [
    body('customer_first_name').isString().withMessage('has to be a string').bail().isLength({ min: 2, max: 191 }).withMessage('has to be 2 - 191 chars'),
    body('customer_last_name').isString().withMessage('has to be a string').bail().isLength({ min: 2, max: 191 }).withMessage('has to be 2 - 191 chars'),
    body('customer_address').isString().withMessage('has to be a string').bail().isLength({ min: 3, max: 191 }).withMessage('has to be 3 - 191 chars'),
    body('customer_postcode').isString().withMessage('has to be a string').bail().isLength({ max: 6 }).withMessage("can't be more than 6 chars"),
    body('customer_city').isString().withMessage('has to be a string').bail().isLength({ min: 2, max: 191 }).withMessage('has to be 2 - 191 chars'),
    body('customer_email').isString().withMessage('has to be a string').bail().isEmail().withMessage('has to be a valid email'),
    body('customer_phone').optional().isString().withMessage('has to be a string'),
    body('order_total').isInt().withMessage('has to be a number').bail().not().isString().withMessage('has to be a number').not().isArray().withMessage('has to be a number').custom(isValidOrderTotal),
    body('order_items').isArray().withMessage('has to be an array [] that contains order_items'),
]