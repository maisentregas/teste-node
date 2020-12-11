import { Router, Request, Response } from 'express'
import knex from '../database/connection'

const routes = Router()

routes.post('/', async (req: Request, res: Response) => {
    const { name, done = false } = req.body

    if (!name || done === null) return res.status(400).json({ error: 'Campos obrigatórios.' })

    const task = await knex('task').insert({ name, done }).returning('*')

    return res.status(201).json(task)
})

routes.get('/', async (req: Request, res: Response) => {
    const result = await knex('task').orderBy('done', 'desc')

    return res.status(200).json(result)
})

routes.put('/:id', async (req: Request, res: Response) => {
    const { name, done } = req.body

    if (!name || done === null) return res.status(400).json({ error: 'Campos obrigatórios.' })

    const result = await knex('task')
        .where({ id: req.params.id })
        .first()
        .update({ name, done })
        .returning('*')

    console.log(result)

    return res.status(200).json(result)
})

routes.delete('/:id', async (req: Request, res: Response) => {
    const result = await knex('task')
        .where({ id: req.params.id })
        .first()
        .del()

    console.log(result)
    return res.status(200).send({ success: 'Tarefa Deletada.' })
})
export default routes