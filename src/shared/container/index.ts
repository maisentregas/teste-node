import { container } from 'tsyringe';

import '../providers';

import { ITodoRepository } from '@modules/todo/repositories/ITodoRepository';
import { ToDoRepository } from '@modules/todo/infra/typeorm/repositories/ToDoRepository';

container.registerSingleton<ITodoRepository>('ToDoRepository', ToDoRepository);
