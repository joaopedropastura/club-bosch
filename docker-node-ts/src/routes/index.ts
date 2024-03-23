import { Router } from 'express';
import UserController from '../controllers/UserController';
import PartyPlaceController from '../controllers/PartyPlaceController';

const userController = new UserController();
const partyPlaceController = new PartyPlaceController();

const router = Router();

router
    .get('/user/:id?', userController.getUser)
    .post('/user/', userController.create)
    .get('/party-place/', partyPlaceController.getPartyPlace)
    .post('/party-place/', partyPlaceController.createPartyPlace)


export default router
