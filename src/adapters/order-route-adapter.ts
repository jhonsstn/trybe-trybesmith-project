import { Request, Response } from 'express';
import IOrderController from '../interfaces/order/order-controller-interface';

const addAdapter = (controller: IOrderController) => async (_req: Request, res: Response) => {
  const orders = await controller.getAll();
  res.status(200).json(orders);
};

export default addAdapter;