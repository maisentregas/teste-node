import { Request, Response } from 'express'
import knex from '../database/connection'

class Controller {

    async create(req: Request, res: Response) {
        const { name, done = false } = req.body

        if (!name || done === null)
            return res.status(400).json({ error: 'Campos obrigatórios.' })

        const task = await knex('task').insert({ name, done }).returning('*')

        return res.status(201).json(task)
    }

    async getAll(req: Request, res: Response) {
        const result = await knex('task').orderBy('done', 'desc')

        return res.status(200).json(result)
    }

    async update(req: Request, res: Response) {
        const { name, done } = req.body

        if (!name || done === null)
            return res.status(400).json({ error: 'Campos obrigatórios.' })

        const task = await knex('task')
            .where({ id: req.params.id }).first()

        if (!task)
            return res.status(400).json({ error: 'Selecione uma tarefa válida.' })

        const result = await knex('task')
            .where({ id: req.params.id })
            .first()
            .update({ name, done })
            .returning('*')

        return res.status(200).json(result)
    }

    async delete(req: Request, res: Response) {
        const result = await knex('task')
            .where({ id: req.params.id })
            .first()
            .del()

        if (result === 0)
            return res.status(400).send({ error: 'Selecione uma tarefa válida.' })

        return res.status(200).send({ success: 'Tarefa Deletada.' })
    }

}



export default Controller