import { Router } from 'express';
import { toDoRouter } from '@modules/todo/infra/http/routes/todo.routes';

const routes = Router();

routes.use('/todo', toDoRouter);

export { routes };
