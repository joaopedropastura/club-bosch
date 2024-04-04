import Router from 'express';

import EventController from '../controllers/envetController';

const eventController = new EventController();

const router = Router();

router
    .get('/', eventController.getEvent)
    .post('/', eventController.createEvent)
    .get('/:id', eventController.getEventById)
    .put('/:id', eventController.updateEvent)
    .delete('/:id', eventController.deleteEvent)

export default router