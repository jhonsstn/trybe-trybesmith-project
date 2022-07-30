import IOrder from './order-interface';

export default interface IOrderService {
  getAll: () => Promise<IOrder[]>
}