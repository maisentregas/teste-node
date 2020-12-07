import { AppError } from '@shared/errors/AppError';
import { IUUIdProvider } from '@shared/infra/providers/UUIdProvider/models/IUUIdProvider';

import { ITodoRepository } from '../repositories/ITodoRepository';

interface IRequest {
  id: string;
}

export class DeleteToDoService {
  constructor(
    private toDoRepository: ITodoRepository,
    private uuidV4Provder: IUUIdProvider,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    if (!id) throw new AppError('the description field must be informed');

    const uuidValidate = await this.uuidV4Provder.validate(id);

    if (!uuidValidate) throw new AppError('the uuid is not an uuid v4 valid');

    const toDo = await this.toDoRepository.findOne(id);

    if (!toDo)
      throw new AppError('ToDo does not exist, so it cannot be deleted');

    await this.toDoRepository.delete(id);
  }
}
