import { Request, Response } from 'express';
import IUserController from '../interfaces/user/user-controller-interface';

const addAdapter = (controller: IUserController) => async (req: Request, res: Response) => {
  const token = await controller.add(req.body);
  res.status(201).json({ token });
};

export default addAdapter;