import Joi from 'joi';
import SignInController from '../controllers/signin-controller';
import ISignInController from '../interfaces/signin/signin-controller-interface';
import UserModel from '../models/user-model';
import Authenticator from '../services/authentication-service';
import UserService from '../services/user-service';
import Validator from '../services/validation-service';

const makeSignInController = (): ISignInController => {
  const validator = new Validator(
    Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
  );
  const userModel = new UserModel();
  const productService = new UserService(userModel);
  const authenticator = new Authenticator();
  return new SignInController(validator, productService, authenticator);
};

export default makeSignInController;
