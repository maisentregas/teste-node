import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ICreateToDoDTO } from '../dtos/ICreateToDoDTO';
import { ITodoRepository } from '../repositories/ITodoRepository';
import { ToDo } from '../infra/typeorm/entities/ToDo';

@injectable()
export class CreateToDoService {
  constructor(
    @inject('ToDoRepository') private toDoRepository: ITodoRepository,
  ) {}

  public async execute({ description }: ICreateToDoDTO): Promise<ToDo> {
    if (!description)
      throw new AppError('the description field must be informed');

    const toDo = await this.toDoRepository.create({ description });

    return toDo;
  }
}
