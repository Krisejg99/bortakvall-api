/**
 * Custom Product Validations
 */
import { CustomValidator } from 'express-validator'

export const isValidPrice: CustomValidator = async price => {
    if (price < 1) {
        return Promise.reject("has to be at least 1")
    }
}

export const isValidStockStatus: CustomValidator = async stock_status => {
    if (!(stock_status === 'instock' || stock_status === 'outofstock')) {
        return Promise.reject("has to be `instock` or `outofstock`")
    }
}

export const isValidStockQuantity: CustomValidator = async value => {
    if (!(value >= 0 || value === null)) {
        return Promise.reject('has to be `null`, `0` or a positive number')
    }
}