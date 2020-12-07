import { IUUIdProvider } from '../models/IUUIdProvider';

export class FakeUUIdV4Provider implements IUUIdProvider {
  public async validate(_: string): Promise<boolean> {
    return true;
  }
}
