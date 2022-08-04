import { Router } from 'express';
import rescue from 'express-rescue';
import signInAdapter from '../adapters/signin-route.adapter';
import makeSignInController from '../factories/signin';

const route = Router();

route.post('/', rescue(signInAdapter(makeSignInController())));

export default route;
