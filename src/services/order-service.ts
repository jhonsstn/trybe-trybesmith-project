import IDBOrders from '../interfaces/order/db-order-interface';
import IOrder from '../interfaces/order/order-interface';
import IOrderModel from '../interfaces/order/order-model-interface';
import IOrderService from '../interfaces/order/order-service-interface';

class OrderService implements IOrderService {
  constructor(private orderModel: IOrderModel) {}

  getAll = async (): Promise<IOrder[]> => {
    const orderList = await this.orderModel.getAll();
    const orders = orderList.reduce((acc: Array<IOrder>, order: IDBOrders) => {
      if (!acc[order.id]) {
        acc[order.id] = {
          id: order.id,
          userId: order.userId,
          productsIds: [],
        };
      }
      acc[order.id].productsIds.push(order.productId);
      return acc;
    }, []);
    // Inclui esse shift porque o reduce retorna um elemento vazio no primeiro elemento
    orders.shift();
    return orders.sort((a, b) => a.userId - b.userId);
  };

  add = async (userId: number): Promise<number> => {
    const orderId = await this.orderModel.add(userId);
    return orderId;
  };
}

export default OrderService;
