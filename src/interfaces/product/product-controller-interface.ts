import IProduct from './product-interface';

export default interface IProductController {
  add: (product: IProduct) => Promise<IProduct>
}