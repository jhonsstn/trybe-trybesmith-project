import IOrder from './order-interface';

export default interface IOrderController {
  getAll: () => Promise<IOrder[]>
}