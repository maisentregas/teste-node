const Tarefas = require('../model/Tarefa')

module.exports = {

    async index(req,res) {
        const lists = await Tarefas.findAll()

        return  res.json(lists);
    },

    async store(req, res) {
        const { nome, status} = req.body

        const tarefas = await Tarefas.create({nome, status})

        return  res.json(tarefas);
    },

    async delete(req,res) {

        Tarefas.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.json({"st" :"success"});
    },

    async update(req, res) {
        const { nome, status} = req.body

        const tarefas = Tarefas.update(
                {
                 nome,
                 status
                },{
                    where: {
                        id: req.params.id
                    }
                }
            )  

        return  res.json(tarefas);
    }
}