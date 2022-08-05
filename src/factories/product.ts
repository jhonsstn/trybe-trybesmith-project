import Joi from 'joi';
import ProductController from '../controllers/product-controller';
import IProductController from '../interfaces/product/product-controller-interface';
import ProductModel from '../models/product-model';
import ProductService from '../services/product-service';
import Validator from '../services/validation-service';

const makeProductController = (): IProductController => {
  const productModel = new ProductModel();
  const productService = new ProductService(productModel);
  const validator = new Validator(
    Joi.object({
      name: Joi.string().min(3).required(),
      amount: Joi.string().min(3).required(),
    }),
  );
  return new ProductController(productService, validator);
};

export default makeProductController;
