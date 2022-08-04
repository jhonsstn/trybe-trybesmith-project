import UnauthorizedError from '../errors/unauthorized-error';
import ISignInController from '../interfaces/signin/signin-controller-interface';
import ISignInData from '../interfaces/signin/signin-data-interface';
import IAuthenticator from '../interfaces/user/authentication-service-interface';
import IUserService from '../interfaces/user/user-service-interface';
import IValidator from '../interfaces/validator-interface';

class SignInController implements ISignInController {
  constructor(
    private validator: IValidator,
    private userService: IUserService,
    private authenticator: IAuthenticator,
  ) {}

  signIn = async (data: ISignInData): Promise<string> => {
    this.validator.validate(data);
    const user = await this.userService.getByUsername(data.username);
    if (!user || user.password !== data.password) {
      throw new UnauthorizedError('Username or password invalid');
    }
    const { password, ...userWithoutPassword } = user;
    return this.authenticator.encode(userWithoutPassword);
  };
}

export default SignInController;
