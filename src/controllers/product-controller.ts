import IProductController from '../interfaces/product/product-controller-interface';
import IProduct from '../interfaces/product/product-interface';
import IProductService from '../interfaces/product/product-service-interface';

export default class ProductController implements IProductController {
  constructor(readonly productService: IProductService) {}

  add = async (product: IProduct): Promise<IProduct> => {
    const productId = await this.productService.add(product);
    return { id: productId, ...product };
  };

  getAll = async (): Promise<IProduct[]> => {
    const products = await this.productService.getAll();
    return products;
  };
}