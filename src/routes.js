import { Router } from 'express';
import TaskController from './app/controllers/task-controller';


const routes = new Router();

routes.post('/task/create', TaskController.store);

export default routes;