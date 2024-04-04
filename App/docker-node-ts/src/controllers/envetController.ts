import { Request, Response } from 'express';
import Event from '../schemas/Event';

export default class EventController {
    public async getEvent(req: Request, res: Response): Promise<void> {
        try {
            const event = await Event.find();
            res.status(200).json(event);
        } catch (error : any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async createEvent(req: Request, res: Response): Promise<void> {
        try {
            const event = new Event(req.body);
            await event.save();
            res.status(201).json(event);
        } catch (error : any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getEventById(req: Request, res: Response): Promise<void> {
        try {
            const event = await Event.findById(req.params.id);
            res.status(200).json(event);
        } catch (error : any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async updateEvent(req: Request, res: Response): Promise<void> {
        try {
            const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(event);
        } catch (error : any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteEvent(req: Request, res: Response): Promise<void> {
        try {
            await Event.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Event deleted successfully' });
        } catch (error : any) {
            res.status(500).json({ message: error.message });
        }
    }
}
