import Joi from 'joi';
import OrderController from '../controllers/order-controller';
import IOrderController from '../interfaces/order/order-controller-interface';
import OrderModel from '../models/order-model';
import ProductModel from '../models/product-model';
import Authenticator from '../services/authentication-service';
import OrderService from '../services/order-service';
import ProductService from '../services/product-service';
import Validator from '../services/validation-service';

const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required()
    .messages({
      'array.min': '"productsIds" must include only numbers',
    }),
});

const makeOrderController = (): IOrderController => {
  const orderModel = new OrderModel();
  const orderService = new OrderService(orderModel);
  const authenticator = new Authenticator();
  const productModel = new ProductModel();
  const productService = new ProductService(productModel);
  const validator = new Validator(orderSchema);
  return new OrderController(
    orderService,
    authenticator,
    productService,
    validator,
  );
};

export default makeOrderController;
