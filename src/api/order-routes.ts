import { Router } from 'express';
import rescue from 'express-rescue';
import { addAdapter, getAllAdapter } from '../adapters/order-route-adapter';
import makeOrderController from '../factories/order';

const route = Router();

route.get('/', getAllAdapter(makeOrderController()));
route.post('/', rescue(addAdapter(makeOrderController())));

export default route;
