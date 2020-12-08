import { validate, version } from 'uuid';
import { IUUIdProvider } from '../models/IUUIdProvider';

export class UUIdV4Provider implements IUUIdProvider {
  public async validate(uuid: string): Promise<boolean> {
    if (version(uuid) === 4 && validate(uuid)) return true;
    return false;
  }
}
