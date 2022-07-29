import { Router } from 'express';
import adaptProduct from '../adapters/product-route-adapter';
import makeProductController from '../factories/product';

const route = Router();

route.post('/', adaptProduct(makeProductController()));

export default route;