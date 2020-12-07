import { AppError } from '@shared/errors/AppError';
import { FakeUUIdV4Provider } from '@shared/infra/providers/UUIdProvider/fakes/FakeUUIdV4Provider';
import { IUUIdProvider } from '@shared/infra/providers/UUIdProvider/models/IUUIdProvider';
import { FakeToDoRepository } from '../repositories/fakes/FakeToDoRepository';
import { DeleteToDoService } from './DeleteToDoService';

let fakeTodoRepository: FakeToDoRepository;
let fakeUUId: IUUIdProvider;
let deleteToDo: DeleteToDoService;

describe('DeleteToDo', () => {
  beforeEach(() => {
    fakeTodoRepository = new FakeToDoRepository();
    fakeUUId = new FakeUUIdV4Provider();
    deleteToDo = new DeleteToDoService(fakeTodoRepository, fakeUUId);
  });

  it('should be able to delete ToDo', async () => {
    const toDo = await fakeTodoRepository.create({ description: 'ToDo' });

    const toDo1 = await fakeTodoRepository.create({ description: 'ToDo 1' });

    await deleteToDo.execute({ id: toDo1.id });

    const toDos = await fakeTodoRepository.find();

    expect(toDos).toEqual([toDo]);
  });

  it('should not be able to delete a ToDo if the id field is empty', async () => {
    await expect(deleteToDo.execute({ id: '' })).rejects.toBeInstanceOf(
      AppError,
    );
  });

  it('should not be able to delete a ToDo if the id field is not a valid uuid', async () => {
    const toDo = await fakeTodoRepository.create({ description: 'ToDo' });

    const uuidValidate = jest.spyOn(fakeUUId, 'validate');

    uuidValidate.mockImplementationOnce(() => Promise.resolve(false));

    await expect(deleteToDo.execute({ id: toDo.id })).rejects.toBeInstanceOf(
      AppError,
    );

    expect(uuidValidate).toHaveBeenCalledWith(toDo.id);
  });

  it('should not be able to delete a ToDo that does not exist', async () => {
    await expect(
      deleteToDo.execute({ id: 'id does not exist' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
