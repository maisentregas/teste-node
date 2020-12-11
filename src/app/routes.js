const { Router } = require('express');
const todocontroller = require('../app/controllers/todocontroller');

routes = Router();


// Rota para CRUD do TODO
routes.use('/todo', Router()
.get('/list', todocontroller.list)
.post('/create', todocontroller.create)
.put('/update/:id', todocontroller.update)
.delete('/delete/:id', todocontroller.delete)
);


module.exports = routes;