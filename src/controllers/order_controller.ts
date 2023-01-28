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
