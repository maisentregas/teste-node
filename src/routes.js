import { Router } from 'express';
import TaskController from './app/controllers/task-controller';


const routes = new Router();

routes.post('/task/create', TaskController.store);
routes.put('/task/update/', TaskController.update);
routes.post('/task/delete/', TaskController.delete);
routes.get('/task/all', TaskController.index);

export default routes;