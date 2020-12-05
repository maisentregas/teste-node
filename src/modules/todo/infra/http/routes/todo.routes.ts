import { Router } from 'express';
import { ToDoController } from '../controller/ToDoController';

const toDoRouter = Router();

const todoController = new ToDoController();

toDoRouter.get('/', todoController.find);

toDoRouter.post('/', todoController.create);

toDoRouter.put('/', todoController.save);

toDoRouter.delete('/', todoController.delete);

export { toDoRouter };
