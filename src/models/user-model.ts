import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IUser from '../interfaces/user/user-interface';
import IUserModel from '../interfaces/user/user-model-interface';
import db from './connection';

class UserModel implements IUserModel {
  add = async (user: IUser): Promise<number> => {
    const { username, classe, level, password } = user;
    const query = `
    INSERT INTO
    Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
    const [{ insertId }] = await db.execute<ResultSetHeader>(query, [
      username,
      classe,
      level,
      password,
    ]);
    return insertId;
  };

  getByUsername = async (username: string): Promise<IUser> => {
    const query = `
    SELECT * FROM Trybesmith.Users
    WHERE username = ?`;
    const [[user]] = await db.execute<RowDataPacket[]>(query, [username]);
    return user as IUser;
  };
}

export default UserModel;
