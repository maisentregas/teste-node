import { Router } from 'express';
import { getRepository } from 'typeorm';
import AppError from '../error/AppError';
import Todo from '../models/Todo';
import CreateTodoService from '../services/CreateTodoService';
import DeleteTodoService from '../services/DeleteTodoService';
import UpdateTodoService from '../services/UpdateTodoService';

const todoRouter = Router();

todoRouter.get('/:id?', async (request, response) => {
  const { id } = request.params;
  const todoRepository = getRepository(Todo);

  if (id) {
    const todoExists = await todoRepository.findOne({where: { id }});
      if(todoExists) {
        return response.json(todoExists);
      } else {
        throw new AppError('Todo not exists')
      }
  } else {
    return response.json(await todoRepository.find());
  }



});

todoRouter.post('/', async (request, response) => {
  const { title, content } = request.body;
  const createTodo = new CreateTodoService();

  const todo = await createTodo.execute({
    title,
    content,
    finished: false
  });

  return response.json(todo);
});

todoRouter.put('/', async (request, response) => {
  const { id, title, content, finished } = request.body;
  const updateTodo = new UpdateTodoService();

  const todo = await updateTodo.execute({
    id,
    title,
    content,
    finished
  });

  return response.json(todo);
});

todoRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTodo = new DeleteTodoService();

  await deleteTodo.execute(id);

  return response.status(204).send();
})


export default todoRouter;
