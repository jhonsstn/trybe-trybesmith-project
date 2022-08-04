import IUser from './user-interface';

export default interface IUserService {
  add: (user: IUser) => Promise<number>;
  getByUsername: (username: string) => Promise<IUser>;
}
