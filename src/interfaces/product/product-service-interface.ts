import IProduct from './product-interface';

export default interface IProductService {
  add: (product: IProduct) => Promise<number>
  getAll: () => Promise<IProduct[]>
}