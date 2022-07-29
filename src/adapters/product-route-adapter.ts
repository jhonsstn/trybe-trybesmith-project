import { Request, Response } from 'express';
import IProductController from '../interfaces/product/product-controller-interface';

const adaptProduct = (controller: IProductController) => async (req: Request, res: Response) => {
  const product = await controller.add(req.body);
  res.status(201).json(product);
};

export default adaptProduct;