/**
 * Controller Template
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('bortakvall:order_item_controller')

/**
 * Get all order_items
 */
export const index = async (req: Request, res: Response) => {
}

/**
 * Get a single order_item
 */
export const show = async (req: Request, res: Response) => {
}

/**
 * Create a order_item
 */
export const store = async (req: Request, res: Response) => {
}

/**
 * Update a order_item
 */
export const update = async (req: Request, res: Response) => {
}

/**
 * Delete a order_item
 */
export const destroy = async (req: Request, res: Response) => {
}
