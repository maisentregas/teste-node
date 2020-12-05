import { ICreateToDoDTO } from '@modules/todo/dtos/ICreateToDoDTO';
import { ITodoRepository } from '@modules/todo/repositories/ITodoRepository';
import { getRepository, Repository } from 'typeorm';
import { ToDo } from '../entities/ToDo';

export class ToDoRepository implements ITodoRepository {
  private ormRepository: Repository<ToDo>;

  constructor() {
    this.ormRepository = getRepository(ToDo);
  }

  public async find(): Promise<ToDo[]> {
    const toDos = this.ormRepository.find();

    return toDos;
  }

  public async findOne(id: string): Promise<ToDo | undefined> {
    const toDo = this.ormRepository.findOne(id);
    return toDo;
  }

  public async create({ description }: ICreateToDoDTO): Promise<ToDo> {
    const toDo = this.ormRepository.create({ description });

    await this.ormRepository.save(toDo);

    return toDo;
  }

  public async save(toDo: ToDo): Promise<ToDo> {
    this.ormRepository.save(toDo);
    return toDo;
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }
}
