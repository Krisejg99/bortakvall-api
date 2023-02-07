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

    const order = await prisma.order.findUnique({
        where:{
            id: Number(orderId)
        }
    })

    if (!order) {
        return res.status(400).send({
            status: "fail",
            message: `${orderId} is not a valid id`,
        })
    }

    try {
        const order = await prisma.order.findUniqueOrThrow({
            where: {
                id: Number(orderId),
            },
            include: {
                order_items: true,
            },
        })

        debug(order.order_date)

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

    const now = new Date()
    const [ date, time ] = now.toLocaleString().trim().split(',')
    const order_date = `${date}${time}`

    try {
        const order = await prisma.order.create({
            data: {
                order_date,
                customer_first_name,
                customer_last_name,
                customer_address,
                customer_postcode,
                customer_city,
                customer_email,
                customer_phone,
                order_total,
                order_items: {
                    create: order_items,
                },
            },
            include: {
                order_items: true,
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
