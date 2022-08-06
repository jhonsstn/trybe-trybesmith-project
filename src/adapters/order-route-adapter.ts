import { Request, Response } from 'express';
import IOrderController from '../interfaces/order/order-controller-interface';

const getAllAdapter = (controller: IOrderController) => async (_req: Request, res: Response) => {
  const orders = await controller.getAll();
  res.status(200).json(orders);
};

const addAdapter = (controller: IOrderController) => async (req: Request, res: Response) => {
  const order = await controller.add(
    req.body,
    req.headers.authorization as string,
  );
  res.status(201).json(order);
};

export { getAllAdapter, addAdapter };
