import jwt from 'jsonwebtoken';
import IAuthentication from '../interfaces/user/authentication-service-interface';
import IUser from '../interfaces/user/user-interface';
import env from '../config/env';

class Authentication implements IAuthentication {
  encode = (data: Omit<IUser, 'password'>): string => {
    const token = jwt.sign(data, env.secret as string);
    return token;
  };

  decode = (token: string): Omit<IUser, 'password'> => {
    const data = jwt.verify(token, env.secret as string);
    return data as Omit<IUser, 'password'>;
  };
}

export default Authentication;