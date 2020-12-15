import { getRepository } from 'typeorm';
import AppError from '../error/AppError';
import Todo from '../models/Todo';

interface Request {
  id: string;
  title: string;
  content: string;
  finished: boolean;
}

class UpdateTodoService {
  public async execute({ id, title, content, finished }: Request): Promise<Todo> {
    const todoRepository = getRepository(Todo);

    const todo = await todoRepository.findOne(id);
    console.log(todo);
    if(!todo) {
      throw new AppError('Todo not Exists');
    }

    Object.assign(todo, {title, content, finished});

    return todoRepository.save(todo);
  }
}

export default UpdateTodoService;
