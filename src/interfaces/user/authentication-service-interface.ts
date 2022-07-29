import IUser from './user-interface';

export default interface IAuthentication {
  encode: (data: Omit<IUser, 'password'>) => string
  decode: (token: string) => Omit<IUser, 'password'>
}