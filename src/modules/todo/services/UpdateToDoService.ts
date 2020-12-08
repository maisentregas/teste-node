import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ToDo } from '../infra/typeorm/entities/ToDo';
import { ITodoRepository } from '../repositories/ITodoRepository';

interface IRequest {
  id: string;
  description: string;
  checked?: boolean;
}

@injectable()
export class UpdateToDoService {
  constructor(
    @inject('ToDoRepository') private toDoRepository: ITodoRepository,
  ) {}

  public async execute({ id, description, checked }: IRequest): Promise<ToDo> {
    let toDoToBeUpdated = await this.toDoRepository.findOne(id);

    if (!toDoToBeUpdated)
      throw new AppError('ToDo does not exist, so it cannot be updated');

    if (!description)
      throw new AppError('the description field must be informed');

    toDoToBeUpdated = Object.assign(toDoToBeUpdated, {
      description,
      checked,
    } as ToDo);

    const toDoAfterUpdate = await this.toDoRepository.save(toDoToBeUpdated);

    return toDoAfterUpdate;
  }
}
