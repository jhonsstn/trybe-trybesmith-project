import IAddOrder from '../interfaces/order/add-order-interface';
import IOrderController from '../interfaces/order/order-controller-interface';
import IOrder from '../interfaces/order/order-interface';
import IOrderService from '../interfaces/order/order-service-interface';
import Authenticator from '../services/authentication-service';
import ProductService from '../services/product-service';
import Validator from '../services/validation-service';

class OrderController implements IOrderController {
  constructor(
    private orderService: IOrderService,
    private authenticator: Authenticator,
    private productService: ProductService,
    private validator: Validator,
  ) {}

  getAll = async (): Promise<IOrder[]> => {
    const orders = await this.orderService.getAll();
    return orders;
  };

  add = async (order: IAddOrder, token: string): Promise<IOrder> => {
    const { id: userId } = await this.authenticator.decode(token);
    this.validator.validate(order);
    const orderId = await this.orderService.add(userId as number);
    await Promise.all(
      order.productsIds.map(async (productId) => {
        await this.productService.update(productId, orderId);
      }),
    );
    return { userId, ...order } as IOrder;
  };
}

export default OrderController;
