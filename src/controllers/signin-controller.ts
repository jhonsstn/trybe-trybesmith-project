import UnauthorizedError from '../errors/unauthorized-error';
import ISignInControllerInterface from '../interfaces/signin/signin-controller-interface';
import ISignInData from '../interfaces/signin/signin-data-interface';
import IAuthenticator from '../interfaces/user/authentication-service-interface';
import IUserModel from '../interfaces/user/user-model-interface';
import IValidator from '../interfaces/validator-interface';

class SignInController implements ISignInControllerInterface {
  constructor(
    private validator: IValidator,
    private userModel: IUserModel,
    private authenticator: IAuthenticator,
  ) {}

  signIn = async (data: ISignInData): Promise<string> => {
    this.validator.validate(data);
    const { password, ...user } = await this.userModel.getById(data.username);
    if (!user || password !== data.password) {
      throw new UnauthorizedError('Username or password invalid');
    }
    return this.authenticator.encode(user);
  };
}

export default SignInController;
