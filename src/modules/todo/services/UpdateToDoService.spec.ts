import { AppError } from '@shared/errors/AppError';
import { FakeToDoRepository } from '../repositories/fakes/FakeToDoRepository';
import { UpdateToDoService } from './UpdateToDoService';

let fakeTodoRepository: FakeToDoRepository;
let updateToDo: UpdateToDoService;

describe('UpdateToDo', () => {
  beforeEach(() => {
    fakeTodoRepository = new FakeToDoRepository();
    updateToDo = new UpdateToDoService(fakeTodoRepository);
  });

  it('should be able to update ToDo', async () => {
    const toDoToBeUpdated = await fakeTodoRepository.create({
      description: 'ToDo',
    });

    const toDo = updateToDo.execute({
      id: toDoToBeUpdated.id,
      description: 'remove the trash',
    });

    const toDoAfterUpdate = fakeTodoRepository.findOne(toDoToBeUpdated.id);

    expect(toDo).toEqual(toDoAfterUpdate);
  });

  it('should not be able to update a ToDo that does not exist', async () => {
    await expect(
      updateToDo.execute({
        id: 'id does not exist',
        description: 'ToDo does not exists',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new ToDo if the description field is empty', async () => {
    const toDoToBeUpdated = await fakeTodoRepository.create({
      description: 'ToDo',
    });

    await expect(
      updateToDo.execute({ id: toDoToBeUpdated.id, description: '' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
