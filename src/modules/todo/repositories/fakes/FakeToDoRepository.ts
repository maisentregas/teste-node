import { v4 as uuid } from 'uuid';
import { ToDo } from '@modules/todo/infra/typeorm/entities/ToDo';
import { ICreateToDoDTO } from '@modules/todo/dtos/ICreateToDoDTO';
import { ITodoRepository } from '../ITodoRepository';

export class FakeToDoRepository implements ITodoRepository {
  private toDos: ToDo[] = [];

  public async find(): Promise<ToDo[]> {
    const toDos = this.toDos.filter(todo => todo.deleted_at === null);
    return toDos;
  }

  public async findOne(id: string): Promise<ToDo | undefined> {
    return this.toDos.find(toDo => toDo.id === id);
  }

  public async create({ description }: ICreateToDoDTO): Promise<ToDo> {
    const toDo = new ToDo();

    Object.assign(toDo, {
      id: uuid(),
      description,
      checked: false,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    } as ToDo);

    this.toDos.push(toDo);

    return toDo;
  }

  public async save(toDo: ToDo): Promise<ToDo> {
    const findByIndex = this.toDos.findIndex(element => element.id === toDo.id);

    Object.assign(this.toDos[findByIndex], { ...toDo, updated_at: new Date() });

    return toDo;
  }

  public async delete(id: string): Promise<void> {
    const findByIndex = this.toDos.findIndex(toDo => toDo.id === id);

    Object.assign(this.toDos[findByIndex], { deleted_at: new Date() } as ToDo);
  }
}
