import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListToDoService } from '@modules/todo/services/ListToDoService';
import { CreateToDoService } from '@modules/todo/services/CreateToDoService';
import { UpdateToDoService } from '@modules/todo/services/UpdateToDoService';
import { DeleteToDoService } from '@modules/todo/services/DeleteToDoService';

export class ToDoController {
  public async find(request: Request, response: Response): Promise<Response> {
    const listToDo = container.resolve(ListToDoService);

    const toDos = await listToDo.execute();

    return response.json(toDos);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createToDo = container.resolve(CreateToDoService);

    const createdToDo = await createToDo.execute({ description });

    return response.status(201).json(createdToDo);
  }

  public async save(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { description, checked } = request.body;

    const updateToDo = container.resolve(UpdateToDoService);

    const updatedToDo = await updateToDo.execute({
      id,
      description,
      checked,
    });

    return response.json(updatedToDo);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteToDo = container.resolve(DeleteToDoService);

    await deleteToDo.execute({ id });

    return response.status(204).json();
  }
}
