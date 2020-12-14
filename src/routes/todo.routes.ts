import { request, response, Router } from 'express';
import { getRepository } from 'typeorm';
import Todo from '../models/Todo';
import CreateTodoService from '../services/CreateTodoService';
import DeleteTodoService from '../services/DeleteTodoService';

const todoRouter = Router();

todoRouter.get('/', async (request, response) => {
  const todoRepository = getRepository(Todo);
  return response.json(await todoRepository.find());
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

todoRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTodo = new DeleteTodoService();

  await deleteTodo.execute(id);

  return response.send(204);
})


export default todoRouter;
