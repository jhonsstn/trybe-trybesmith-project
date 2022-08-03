import IUser from './user-interface';

export default interface IAuthenticator {
  encode: (data: Omit<IUser, 'password'>) => string;
  decode: (token: string) => Omit<IUser, 'password'>;
}
