import { ICreateToDoDTO } from '../dtos/ICreateToDoDTO';
import { ToDo } from '../infra/typeorm/entities/ToDo';

export interface ITodoRepository {
  find(): Promise<ToDo[]>;
  findOne(id: string): Promise<ToDo | undefined>;
  create(data: ICreateToDoDTO): Promise<ToDo>;
  save(toDo: ToDo): Promise<ToDo>;
  delete(id: string): Promise<void>;
}
