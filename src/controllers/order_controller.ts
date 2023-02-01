/**
 * Controller Template
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('bortakvall:order_controller')

/**
 * Get all orders
 */
export const index = async (req: Request, res: Response) => {
}

/**
 * Get a single order
 */
export const show = async (req: Request, res: Response) => {
}

/**
 * Create a order
 */
export const store = async (req: Request, res: Response) => {
    const { customer_first_name, customer_last_name, customer_address, customer_postcode, customer_city, customer_email, customer_phone, order_total, order_items } = req.body

    try {
        const order = await prisma.order.create({
            data: {
                customer_first_name,
                customer_last_name,
                customer_address,
                customer_postcode,
                customer_city,
                customer_email,
                customer_phone,
                order_total,
                order_items,
            },
        })

        res.status(201).send({
            status: "success",
            data: order,
        })
    }
    catch (err) {
        
    }
}

/**
 * Update a order
 */
export const update = async (req: Request, res: Response) => {
}

/**
 * Delete a order
 */
export const destroy = async (req: Request, res: Response) => {
}
