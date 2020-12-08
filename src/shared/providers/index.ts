import { container } from 'tsyringe';

import { IUUIdProvider } from './UUIdProvider/models/IUUIdProvider';
import { UUIdV4Provider } from './UUIdProvider/implementations/UUIdV4Provider';

container.registerSingleton<IUUIdProvider>('UUIdProvider', UUIdV4Provider);
