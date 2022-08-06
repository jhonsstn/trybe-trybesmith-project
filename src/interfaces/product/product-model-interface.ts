import IProduct from './product-interface';

export default interface IProductModel {
  add: (product: IProduct) => Promise<number>;
  getAll: () => Promise<IProduct[]>;
  update: (productId: number, orderId: number) => Promise<void>;
}
