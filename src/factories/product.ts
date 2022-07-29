import ProductController from '../controllers/product-controller';
import IProductController from '../interfaces/product/product-controller-interface';
import ProductModel from '../models/product-model';
import ProductService from '../services/product-service';

const makeProductController = (): IProductController => {
  const productModel = new ProductModel();
  const productService = new ProductService(productModel);
  return new ProductController(productService);
};

export default makeProductController;