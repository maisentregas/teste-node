const repository = require("../repositories/todo-repository");

/**
 * Recupera todos os ToDo's do banco de dados.
 * @param {*} req Requisição contendo parâmetros, se necessários.
 * @param {data, message} res Resposta da resquisição.
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
 * Deleta um ToDo do banco de dados.
 * @param {id} req ID do ToDo que se deseja remover.
 * @param {message} res Resposta da resquisição.
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
 * Cria um ToDo e armazena no banco de dados.
 * @param {body} req Requisição contendo parâmetros do objeto a ser criado.
 * @param {message} res Resposta da resquisição.
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
 * Atualiza algum atributo de um ToDo's no banco de dados.
 * @param {id, body} req ID do ToDo que se deseja atualizar.
 * @param {message} res Resposta da resquisição.
 */
exports.update_todo = async function(req, res) {
    try {
        await repository.update_todo(req.params.id, req.body);
        res.status(200).send({
            message: "ToDo atualizado com sucesso!"
        });
    } catch (e) {
        res.status(500).send({ message: "Falha ao atualizar o ToDo." });
    }
};

/**
 * Recupera um ToDo's específico do banco de dados dado o ID do objeto.
 * @param {id} req ID do ToDo que se deseja recuperar.
 * @param {data, message} res Resposta da resquisição.
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
 * Deleta todos os ToDo's do banco de dados.
 * @param {*} req Requisição contendo parâmetros, se necessários.
 * @param {message} res Resposta da resquisição.
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