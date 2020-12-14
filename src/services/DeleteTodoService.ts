import { getRepository } from 'typeorm';
import AppError from '../error/AppError';

import Todo from "../models/Todo";



class DeleteTodoService {
  public async execute(id: string): Promise<void> {

    if(!id) {
      throw new AppError('Id is invalid');
    }

    const todoRepository = getRepository(Todo);

    let todo = todoRepository.delete(id);
  }
}

export default DeleteTodoService;
