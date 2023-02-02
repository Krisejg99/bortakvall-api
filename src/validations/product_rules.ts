
/**
 * Product Validations
 */
import { body, CustomValidator } from 'express-validator'
import Debug from 'debug'

const debug = Debug('bortakvall:product_rules')


const isValidStockStatus: CustomValidator = async stock_status => {
    if (!(stock_status === 'instock' || stock_status === 'outofstock')) {
        return Promise.reject("has to be `instock` or `outofstock`")
    }
}

const isValidPrice: CustomValidator = async price => {
    if (price < 1) {
        return Promise.reject("has to be at least 1")
    }

}


export const createProductRules = [
    body('name').isString().withMessage('has to be a string').bail().isLength({ min: 3, max: 191 }).withMessage('has to be 3 - 191 chars long'),
    body('description').isString().withMessage('has to be a string').bail().isLength({ min: 3 }).withMessage('has to be at least 3 chars long'),
    body('price').isInt().withMessage('has to be a number').bail().not().isString().withMessage('has to be a number').not().isArray().withMessage('has to be a number').bail().custom(isValidPrice),
    body('images').isObject().withMessage('has to be an object in JSON format'),
    body('stock_status').isString().withMessage('has to be a string').bail().custom(isValidStockStatus),
    body('stock_quantity').isInt().withMessage('has to be a number').bail().not().isString().withMessage('has to be a number').not().isArray().withMessage('has to be a number').bail(),
]