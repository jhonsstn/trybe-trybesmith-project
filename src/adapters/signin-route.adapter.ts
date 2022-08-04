import { Request, Response } from 'express';
import ISignInController from '../interfaces/signin/signin-controller-interface';

const signInAdapter = (controller: ISignInController) => async (req: Request, res: Response) => {
  const token = await controller.signIn(req.body);
  res.status(200).json({ token });
};

export default signInAdapter;
