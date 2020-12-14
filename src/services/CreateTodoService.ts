import { getRepository } from 'typeorm';

import Todo from "../models/Todo";

interface Request {
  title: string;
  content?: string;
  finished?: boolean;
}

class CreateTodoService {
  public async execute({title, content = '', finished = false}: Request): Promise<Todo> {
    const todoRepository = getRepository(Todo);

    let todo = todoRepository.create({
      title,
      content,
      finished
    });

    todo = await todoRepository.save(todo);

    return todo;
  }
}

export default CreateTodoService;
