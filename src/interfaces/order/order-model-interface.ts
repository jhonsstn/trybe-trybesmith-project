import IOrder from './db-order-interface';

export default interface IOrderModel {
  getAll: () => Promise<IOrder[]>;
  add: (userId: number) => Promise<number>;
}
