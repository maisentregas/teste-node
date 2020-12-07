import { FakeToDoRepository } from '../repositories/fakes/FakeToDoRepository';
import { ListToDoService } from './ListToDoService';

let fakeTodoRepository: FakeToDoRepository;
let listToDo: ListToDoService;

describe('ListToDos', () => {
  beforeEach(() => {
    fakeTodoRepository = new FakeToDoRepository();
    listToDo = new ListToDoService(fakeTodoRepository);
  });

  it('should be able to list ToDos', async () => {
    const toDo = await fakeTodoRepository.create({ description: 'ToDo' });

    const toDo1 = await fakeTodoRepository.create({ description: 'ToDo 1' });

    const toDos = await listToDo.execute();

    expect(toDos).toEqual([toDo, toDo1]);
  });
});
