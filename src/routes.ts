import {  Router  } from 'express';

import AuthMiddleware from './app/middlewares/AuthMiddleware';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';


const router = Router();

router.post('/register', UserController.create);
router.post('/auth', AuthController.auth);
router.get('/register', AuthMiddleware, UserController.index);


export default router;