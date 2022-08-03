import jwt from 'jsonwebtoken';
import env from '../config/env';
import IAuthenticator from '../interfaces/user/authentication-service-interface';
import IUser from '../interfaces/user/user-interface';

class Authenticator implements IAuthenticator {
  encode = (data: Omit<IUser, 'password'>): string => {
    const token = jwt.sign(data, env.secret as string);
    return token;
  };

  decode = (token: string): Omit<IUser, 'password'> => {
    const data = jwt.verify(token, env.secret as string);
    return data as Omit<IUser, 'password'>;
  };
}

export default Authenticator;
