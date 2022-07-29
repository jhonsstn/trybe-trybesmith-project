import IAuthentication from '../interfaces/user/authentication-service-interface';
import IUserController from '../interfaces/user/user-controller-interface';
import IUser from '../interfaces/user/user-interface';
import IUserService from '../interfaces/user/user-service-interface';

export default class UserController implements IUserController {
  constructor(readonly authentication: IAuthentication, readonly userService: IUserService) {}

  add = async (user: IUser): Promise<string> => {
    const userId = await this.userService.add(user);
    const { password, ...userWithoutPassword } = user;
    const token = this.authentication.encode({ id: userId, ...userWithoutPassword });
    return token;
  };
}