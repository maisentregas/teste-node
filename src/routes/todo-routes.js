var express = require('express');
var router = new express.Router();
var controller = require('../controllers/todo.controller');


/**
 * @api {get} /todo Get all ToDo's
 * @apiName GetAllTodos
 * @apiSuccess {Object[]} todo List of ToDo's.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.get('/', controller.list_todo);

/**
 * @api {get} /todo/:id Get specific ToDo
 * @apiname GetTodo
 * @apiSuccess (Sucess 200) {Object} 200 todo Data's ToDo.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.get('/:id', controller.get_todo)

/**
 * @api {post} /todo Create ToDo
 * @apiname CreateTodo
 * @apiSuccess (Sucess 201) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.post('/', controller.create_todo)

/**
 * @api {delete} /todo Remove ToDo
 * @apiname DeleteTodo
 * @apiSuccess (Sucess 200) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.delete('/:id', controller.delete_todo)

/**
 * @api {put} /todo/:id Update ToDo
 * @apiname UpdateTodo
 * @apiSuccess (Sucess 200) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.put('/:id', controller.update_todo)

/**
 * @api {delete} /todo Delete all ToDo's
 * @apiname DeleteAllTodos
 * @apiSuccess (Sucess 200) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.delete('/', controller.delete_todos)

module.exports = router;