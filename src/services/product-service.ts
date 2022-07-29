import IProduct from '../interfaces/product/product-interface';
import IProductModel from '../interfaces/product/product-model-interface';
import IProductService from '../interfaces/product/product-service-interface';

class ProductService implements IProductService {
  constructor(readonly productModel: IProductModel) {}

  async add(product: IProduct): Promise<number> {
    const productId = await this.productModel.add(product);
    return productId;
  }
}

export default ProductService;