import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import AppError from '../error/AppError';
import Todo from '../models/Todo';
import CreateTodoService from '../services/CreateTodoService';
import DeleteTodoService from '../services/DeleteTodoService';
import UpdateTodoService from '../services/UpdateTodoService';

class TodoController {
  public async index(request: Request, response: Response) {
    const { id } = request.params;
    const todoRepository = getRepository(Todo);

    if (id) {
      const todoExists = await todoRepository.findOne({where: { id }});
        if(todoExists) {
          return response.json(todoExists);
        } else {
          throw new AppError('Todo not exists');
        }
    } else {
      return response.json(await todoRepository.find());
    }
  };

  public async create(request: Request, response: Response) {
    const { title, content } = request.body;
    const createTodo = new CreateTodoService();

    const todo = await createTodo.execute({
      title,
      content,
      finished: false
    });

    return response.json(todo);
  };

  public async update(request: Request, response: Response) {
    const { id, title, content, finished } = request.body;
    const updateTodo = new UpdateTodoService();

    const todo = await updateTodo.execute({
      id,
      title,
      content,
      finished
    });

    return response.json(todo);
  };

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteTodo = new DeleteTodoService();

    await deleteTodo.execute(id);

    return response.status(204).send();
  }
}

export default TodoController;
