import { Router } from 'express';
import UserController from '../controllers/UserController';
import PartyPlaceController from '../controllers/PartyPlaceController';
import AuthController from '../controllers/authController';
const userController = new UserController();
const partyPlaceController = new PartyPlaceController();
const authController = new AuthController();
const router = Router();

router
.get('/users/:id?', userController.getUser)
.post('/users/', userController.create)
.get('/party-place/', partyPlaceController.getPartyPlace)
.post('/party-place/', partyPlaceController.createPartyPlace)
.post('/register', authController.register)
.post('/login', authController.login)

export default router
