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
    try {
        const orders = await prisma.order.findMany()

        res.send({
            status: "success",
            data: orders,
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
 * Get a single order
 */
export const show = async (req: Request, res: Response) => {
    const { orderId } = req.params

    try {
        const order = await prisma.order.findUniqueOrThrow({
            where: {
                id: Number(orderId),
            },
        })

        res.send({
            status: "success",
            data: order,
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
 * Create a order
 */
export const store = async (req: Request, res: Response) => {
    const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).send({
			status: "fail",
			data: validationErrors.array()
		})
	}

    const {
        customer_first_name,
        customer_last_name,
        customer_address,
        customer_postcode,
        customer_city,
        customer_email,
        customer_phone,
        order_total,
        order_items
    } = req.body

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
        res.status(500).send({
            status: "error",
            message: "Something went wrong"
        })
    }
}
