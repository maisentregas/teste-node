import { ToDo } from '../infra/typeorm/entities/ToDo';
import { ITodoRepository } from '../repositories/ITodoRepository';

export class ListToDoService {
  constructor(private toDoRepository: ITodoRepository) {}

  public async execute(): Promise<ToDo[]> {
    const toDos = await this.toDoRepository.find();

    return toDos;
  }
}
