/**
 * Custom Order Validations
 */
import { CustomValidator } from 'express-validator'

export const isValidOrderTotal: CustomValidator = async total => {
    if (total < 1) {
        return Promise.reject("has to be at least 1")
    }
}