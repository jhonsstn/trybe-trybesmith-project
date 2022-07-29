import IUser from '../interfaces/user/user-interface';
import IUserModel from '../interfaces/user/user-model-interface';
import IUserService from '../interfaces/user/user-service-interface';

class UserService implements IUserService {
  constructor(readonly userModel: IUserModel) {}

  add = async (user: IUser): Promise<number> => {
    const userId = await this.userModel.add(user);
    return userId;
  };
}

export default UserService;