import { Router } from 'express';
import rescue from 'express-rescue';
import addAdapter from '../adapters/user-route-adapter';
import makeUserController from '../factories/user';

const route = Router();

route.post('/', rescue(addAdapter(makeUserController())));

export default route;
