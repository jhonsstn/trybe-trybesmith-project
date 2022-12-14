import IAuthenticator from '../interfaces/user/authentication-service-interface';
import IUserController from '../interfaces/user/user-controller-interface';
import IUser from '../interfaces/user/user-interface';
import IUserService from '../interfaces/user/user-service-interface';
import IValidator from '../interfaces/validator-interface';

export default class UserController implements IUserController {
  constructor(
    private authenticator: IAuthenticator,
    private userService: IUserService,
    private validator: IValidator,
  ) {}

  add = async (user: IUser): Promise<string> => {
    this.validator.validate(user);
    const userId = await this.userService.add(user);
    const { password, ...userWithoutPassword } = user;
    const token = this.authenticator.encode({
      id: userId,
      ...userWithoutPassword,
    });
    return token;
  };
}
