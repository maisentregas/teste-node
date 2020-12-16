import { Router } from 'express';
import TodoController from '../controllers/TodoController';

const todoRouter = Router();
const todoController = new TodoController();

todoRouter.get('/:id?',todoController.index);

todoRouter.post('/', todoController.create);

todoRouter.put('/', todoController.update);

todoRouter.delete('/:id', todoController.delete);


export default todoRouter;
