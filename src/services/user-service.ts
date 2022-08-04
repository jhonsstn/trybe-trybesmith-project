import IUser from '../interfaces/user/user-interface';
import IUserModel from '../interfaces/user/user-model-interface';
import IUserService from '../interfaces/user/user-service-interface';

class UserService implements IUserService {
  constructor(private userModel: IUserModel) {}

  add = async (user: IUser): Promise<number> => {
    const userId = await this.userModel.add(user);
    return userId;
  };

  getByUsername = async (username: string): Promise<IUser> => {
    const user = await this.userModel.getByUsername(username);
    return user;
  };
}

export default UserService;
