import { Router } from 'express';
import { addAdapter, getAllAdapter } from '../adapters/product-route-adapter';
import makeProductController from '../factories/product';

const route = Router();

route.post('/', addAdapter(makeProductController()));
route.get('/', getAllAdapter(makeProductController()));

export default route;