import { Router } from 'express';
import addAdapter from '../adapters/order-route-adapter';
import makeOrderController from '../factories/order';

const route = Router();

route.get('/', addAdapter(makeOrderController()));

export default route;