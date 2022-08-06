import IAddOrder from './add-order-interface';
import IOrder from './order-interface';

export default interface IOrderController {
  getAll: () => Promise<IOrder[]>;
  add: (order: IAddOrder, token: string) => Promise<IOrder>;
}
