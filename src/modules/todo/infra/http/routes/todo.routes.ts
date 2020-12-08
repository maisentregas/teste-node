import { Router } from 'express';
import { ToDoController } from '../controller/ToDoController';

const toDoRouter = Router();

const todoController = new ToDoController();

toDoRouter.get('/', todoController.find);

toDoRouter.post('/', todoController.create);

toDoRouter.put('/:id', todoController.save);

toDoRouter.delete('/:id', todoController.delete);

export { toDoRouter };
