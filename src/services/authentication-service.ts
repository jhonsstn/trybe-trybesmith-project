import jwt from 'jsonwebtoken';
import env from '../config/env';
import UnauthorizedError from '../errors/unauthorized-error';
import IAuthenticator from '../interfaces/user/authentication-service-interface';
import IUser from '../interfaces/user/user-interface';

class Authenticator implements IAuthenticator {
  encode = (data: Omit<IUser, 'password'>): string => {
    const token = jwt.sign(data, env.secret as string);
    return token;
  };

  decode = (token: string): Omit<IUser, 'password'> => {
    if (!token) throw new UnauthorizedError('Token not found');
    try {
      const data = jwt.verify(token, env.secret as string);
      return data as Omit<IUser, 'password'>;
    } catch (_error) {
      throw new UnauthorizedError('Invalid token');
    }
  };
}

export default Authenticator;
