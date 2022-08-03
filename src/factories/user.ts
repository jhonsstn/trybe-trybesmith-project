import UserController from '../controllers/user-controller';
import IUserController from '../interfaces/user/user-controller-interface';
import UserModel from '../models/user-model';
import Authenticator from '../services/authentication-service';
import UserService from '../services/user-service';

const makeUserController = (): IUserController => {
  const userModel = new UserModel();
  const productService = new UserService(userModel);
  const authenticator = new Authenticator();
  return new UserController(authenticator, productService);
};

export default makeUserController;
