const express = require('express')
const TarefasController = require('./controllers/TarefasController')

const routes = express.Router();

routes.get('/tarefa', TarefasController.index)
routes.post('/tarefa', TarefasController.store)
routes.put('/tarefa/:id', TarefasController.update)
routes.delete('/tarefa/:id', TarefasController.delete)


module.exports = routes