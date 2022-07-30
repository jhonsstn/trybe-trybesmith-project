import OrderController from '../controllers/order-controller';
import IOrderController from '../interfaces/order/order-controller-interface';
import OrderModel from '../models/order-model';
import OrderService from '../services/order-service';

const makeOrderController = (): IOrderController => {
  const orderModel = new OrderModel();
  const orderService = new OrderService(orderModel);
  return new OrderController(orderService);
};

export default makeOrderController;