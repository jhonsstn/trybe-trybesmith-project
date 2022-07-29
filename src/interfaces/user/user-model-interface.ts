import IUser from './user-interface';

export default interface IUserModel {
  add: (user: IUser) => Promise<number>
}