import { Router } from 'express';
import PartyPlaceController from '../controllers/PartyPlaceController';


const partyPlaceController = new PartyPlaceController();

const router = Router();


router
    .get('/', partyPlaceController.getPartyPlace)
    .post('/', partyPlaceController.createPartyPlace)
    .get('/:id', partyPlaceController.getPartyPlaceById)
    .put('/:id', partyPlaceController.updatePartyPlace)
    .delete('/:id', partyPlaceController.deletePartyPlace)


export default router