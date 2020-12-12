import { Router } from 'express'

const routes = Router()

import Controller from './controllers/controller'
const controller = new Controller

routes.post('/', controller.create)
routes.get('/', controller.getAll)
routes.put('/:id', controller.update)
routes.delete('/:id', controller.delete)

export default routes