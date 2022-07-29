import { Request, Response } from 'express';
import IProductController from '../interfaces/product/product-controller-interface';

const addAdapter = (controller: IProductController) => async (req: Request, res: Response) => {
  const product = await controller.add(req.body);
  res.status(201).json(product);
};

const getAllAdapter = (controller: IProductController) => async (req: Request, res: Response) => {
  const product = await controller.getAll();
  res.status(200).json(product);
};

export { addAdapter, getAllAdapter };