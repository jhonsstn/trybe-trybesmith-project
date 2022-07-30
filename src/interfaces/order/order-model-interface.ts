import IOrder from './orders-interface';

export default interface IOrderModel {
  getAll: () => Promise<IOrder[]>
}