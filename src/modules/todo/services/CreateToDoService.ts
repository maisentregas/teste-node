import { AppError } from '@shared/errors/AppError';
import { ICreateToDoDTO } from '../dtos/ICreateToDoDTO';
import { ToDo } from '../infra/typeorm/entities/ToDo';
import { ITodoRepository } from '../repositories/ITodoRepository';

export class CreateToDoService {
  constructor(private toDoRepository: ITodoRepository) {}

  public async execute({ description }: ICreateToDoDTO): Promise<ToDo> {
    if (!description)
      throw new AppError('the description field must be informed');

    const toDo = await this.toDoRepository.create({ description });

    return toDo;
  }
}
