/**
 * Custom Product Validations
 */
import { CustomValidator } from 'express-validator'

export const isValidStockStatus: CustomValidator = async stock_status => {
    if (!(stock_status === 'instock' || stock_status === 'outofstock')) {
        return Promise.reject("has to be `instock` or `outofstock`")
    }
}

export const isValidPrice: CustomValidator = async price => {
    if (price < 1) {
        return Promise.reject("has to be at least 1")
    }
}