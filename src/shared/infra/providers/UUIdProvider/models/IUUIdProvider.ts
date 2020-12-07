export interface IUUIdProvider {
  validate(uuid: string): Promise<boolean>;
}
