/**
 * Controller Template
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('bortakvall:product_controller')

/**
 * Get all products
 */
export const index = async (req: Request, res: Response) => {
    try {
        const products = await prisma.product.findMany()
        res.send({
            status: "success",
            data: products,
        })
    }
    catch (err) {
        res.status(500).send({
            status: "error",
            message: "Something went wrong"
        })
    }
}

/**
 * Get a single product
 */
export const show = async (req: Request, res: Response) => {
}

/**
 * Create a product
 */
export const store = async (req: Request, res: Response) => {
}

/**
 * Update a product
 */
export const update = async (req: Request, res: Response) => {
}

/**
 * Delete a product
 */
export const destroy = async (req: Request, res: Response) => {
}
