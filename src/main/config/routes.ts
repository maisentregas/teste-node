import { Express, Router} from 'express';
import todoRoute from '../routes/todo-route';

export const useRoutes = (app: Express) => {
    const router = Router();
    router.use('/v1/todo', todoRoute);
    app.use(router);
}