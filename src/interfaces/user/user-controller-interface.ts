import IUser from './user-interface';

export default interface IUserController {
  add: (user: IUser) => Promise<string>
}