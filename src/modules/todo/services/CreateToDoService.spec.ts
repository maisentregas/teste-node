import { AppError } from '@shared/errors/AppError';
import { FakeToDoRepository } from '../repositories/fakes/FakeToDoRepository';
import { CreateToDoService } from './CreateToDoService';

let fakeTodoRepository: FakeToDoRepository;
let createToDo: CreateToDoService;

describe('CreateToDo', () => {
  beforeEach(() => {
    fakeTodoRepository = new FakeToDoRepository();
    createToDo = new CreateToDoService(fakeTodoRepository);
  });

  it('should be able to create new ToDo', async () => {
    const toDo = await createToDo.execute({ description: 'ToDo' });

    const toDoCreated = await fakeTodoRepository.findOne(toDo.id);

    expect(toDo).toEqual(toDoCreated);
  });

  it('should not be able to create a new ToDo if the description field is empty', async () => {
    await expect(
      createToDo.execute({ description: '' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
