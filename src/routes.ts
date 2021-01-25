import {  Router  } from 'express';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';


const router = Router();

router.post('/register', UserController.create);
router.post('/auth', AuthController.auth);


export default router;