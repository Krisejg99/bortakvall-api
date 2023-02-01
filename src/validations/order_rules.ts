/**
 * Order Validations
 */
import { body } from 'express-validator'

export const createOrderRules = [
    body('customer_first_name').isString().withMessage('has to be a string'),
    body('customer_las_name').isString().withMessage('has to be a string'),
    body('customer_address').isString().withMessage('has to be a string'),
    body('customer_postcode').isString().withMessage('has to be a string'),
    body('customer_city').isString().withMessage('has to be a string'),
    body('customer_email').isString().withMessage('has to be a string'),
    body('customer_phone').optional(),
    body('order_total').isInt().withMessage('has to be a number'),
    body('order_items'),
]