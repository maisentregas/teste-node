import { injectable, inject } from 'tsyringe';

import { ToDo } from '../infra/typeorm/entities/ToDo';
import { ITodoRepository } from '../repositories/ITodoRepository';

@injectable()
export class ListToDoService {
  constructor(
    @inject('ToDoRepository') private toDoRepository: ITodoRepository,
  ) {}

  public async execute(): Promise<ToDo[]> {
    const toDos = await this.toDoRepository.find();

    return toDos;
  }
}
