import IOrderController from '../interfaces/order/order-controller-interface';
import IOrder from '../interfaces/order/order-interface';
import IOrderService from '../interfaces/order/order-service-interface';

class OrderController implements IOrderController {
  constructor(private orderService: IOrderService) {}

  getAll = async (): Promise<IOrder[]> => {
    const orders = await this.orderService.getAll();
    return orders;
  };
}

export default OrderController;