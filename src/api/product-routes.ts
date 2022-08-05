import { Router } from 'express';
import rescue from 'express-rescue';
import { addAdapter, getAllAdapter } from '../adapters/product-route-adapter';
import makeProductController from '../factories/product';

const route = Router();

route.post('/', rescue(addAdapter(makeProductController())));
route.get('/', getAllAdapter(makeProductController()));

export default route;
