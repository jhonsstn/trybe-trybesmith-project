import { Router } from 'express';
import addAdapter from '../adapters/user-route-adapter';
import makeUserController from '../factories/user';

const route = Router();

route.post('/', addAdapter(makeUserController()));

export default route;