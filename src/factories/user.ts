import UserController from '../controllers/user-controller';
import IUserController from '../interfaces/user/user-controller-interface';
import UserModel from '../models/user-model';
import Authentication from '../services/authentication-service';
import UserService from '../services/user-service';

const makeUserController = (): IUserController => {
  const userModel = new UserModel();
  const productService = new UserService(userModel);
  const authentication = new Authentication();
  return new UserController(authentication, productService);
};

export default makeUserController;