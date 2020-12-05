var repository = require("../repositories/todo-repository");

/**
 * Get all ToDo's from database.
 * @param {*} req Request containing parameters, if necessary.
 * @param {data, message} res Request answer.
 */
exports.list_todo = async (req, res) =>{
    try {
        const data = await repository.list_todo();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: "Falha ao carregar os ToDo's." });
    }
};

/**
 * Delete a ToDo from database.
 * @param {id} req ID of ToDo that you  want to delete.
 * @param {message} res Request answer.
 */
exports.delete_todo = async (req, res) =>{
    try {
        await repository.delete_todo(req.params.id);
        res.status(200).send({
            message: "ToDo removido com sucesso!"
        });
    } catch (e) {
        res.status(500).send({ message: "Falha ao remover o ToDo." });
    }
};

/**
 * Create a ToDo and storage in the database.
 * @param {body} req Request containing parameters of the object to be created.
 * @param {message} res Request answer.
 */
exports.create_todo = async (req, res) => {
    try {
        await repository.create_todo(req.body);

        res.status(201).send({ message: "ToDo cadastrado com sucesso!" });
    } catch (e) {
        res.status(500).send({ message: "Falha ao cadastrar o ToDo." });
    }
};

/**
 * Update a ToDo status 'done' equals true or false in the database.
 * @param {id, body} req ID of ToDo that you  want to update.
 * @param {message} res Request answer.
 */
exports.update_todo = async function(req, res) {
    try {
        await repository.update_todo(req.params.id);
        res.status(200).send({
            message: "ToDo atualizado com sucesso!"
        });
    } catch (e) {
        res.status(500).send({ message: "Falha ao atualizar o ToDo." });
    }
};

/**
 * Get a ToDo from database by his ID.
 * @param {id} req ID of ToDo that you  want to get.
 * @param {data, message} res Request answer.
 */
exports.get_todo = async (req, res) =>{
    try {
        const data = await repository.get_todo(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: "Falha ao carregar o ToDo." });
    }
};

/**
 * Delete all ToDo's from database.
 * @param {*} req Request containing parameters, if necessary.
 * @param {message} res Request answer.
 */
exports.delete_todos = async (req, res) =>{
    try {
        await repository.delete_todos();
        res.status(200).send({
            message: "ToDo's removidos com sucesso!"
        });
    } catch (e) {
        res.status(500).send({ message: "Falha ao remover os ToDo's." });
    }
};