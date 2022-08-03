import IProduct from '../interfaces/product/product-interface';
import IProductModel from '../interfaces/product/product-model-interface';
import IProductService from '../interfaces/product/product-service-interface';

class ProductService implements IProductService {
  constructor(private productModel: IProductModel) {}

  add = async (product: IProduct): Promise<number> => {
    const productId = await this.productModel.add(product);
    return productId;
  };

  getAll = async (): Promise<IProduct[]> => {
    const products = await this.productModel.getAll();
    return products;
  };
}

export default ProductService;
