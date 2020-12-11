import { Router, Request, Response } from 'express'
import knex from '../database/connection'

const routes = Router()

routes.post('/', async (req: Request, res: Response) => {
    const { name, done } = req.body

    const task = await knex('task').insert({ name, done }).returning('*')
    return res.status(201).json(task)
})

export default routes