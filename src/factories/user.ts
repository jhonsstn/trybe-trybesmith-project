import Joi from 'joi';
import UserController from '../controllers/user-controller';
import IUserController from '../interfaces/user/user-controller-interface';
import UserModel from '../models/user-model';
import Authenticator from '../services/authentication-service';
import UserService from '../services/user-service';
import Validator from '../services/validation-service';

const makeUserController = (): IUserController => {
  const userModel = new UserModel();
  const productService = new UserService(userModel);
  const authenticator = new Authenticator();
  const validator = new Validator(
    Joi.object({
      username: Joi.string().min(3).required(),
      classe: Joi.string().min(3).required(),
      level: Joi.number().min(1).required(),
      password: Joi.string().min(8).required(),
    }),
  );
  return new UserController(authenticator, productService, validator);
};

export default makeUserController;
