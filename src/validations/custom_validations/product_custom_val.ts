/**
 * Custom Product Validations
 */
import { CustomValidator } from 'express-validator'

export const isValidStockQuantity: CustomValidator = async value => {
    if (!(value >= 0 || value === null) || (value === true || value === false)) {
        return Promise.reject('has to be `null`, `0` or a positive integer')
    }
}