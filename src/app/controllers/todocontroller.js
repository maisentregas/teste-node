const { verifica } = require('./applicationcontroller');
const Todo = require('../models/Todo');

module.exports = {
    async create(req, res) {
        try {
            const { name, description } = verifica(req.body, ['name', 'description']);
            const todo = await Todo.create({name, description});
            return res.status(201).send({todo});
        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    },

    async list(req, res) {
        try {
            const todos = await Todo.findAll();

            return res.status(200).send(todos);
        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    },

    async delete(req, res) {
        try {
            const { id } = verifica(req.params, ['id']);
            const todo = await Todo.findByPk(id);

            if (todo)
                await todo.destroy();

            // se houver deleção no banco retornar status 200 caso contrário 204 
            return res.status(todo ? 200 : 204).send();         
        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    },

    async update(req, res) {
        try {
            const { id } = verifica(req.params, ['id']);
            const { name, description } = req.body;
            const todo = await Todo.findByPk(id);

            if (!todo) throw { status: 404, message: 'TODO not found' }
            if (!name && !description) throw {status: 400, message: 'missing information'}

            // atualiza apenas os campos enviados na requisição
            await todo.update({name: name || todo.name, description: description || todo.description});

            return res.status(200).send({todo});
             
        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    }
}