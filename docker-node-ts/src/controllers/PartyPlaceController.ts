
import { Request, Response } from 'express';

import PartyPlace from '../schemas/partyPlace';


export default class PartyPlaceController {
    public async getPartyPlace(req: Request, res: Response): Promise<void> {
        try {
            const partyPlace = await PartyPlace.find();
            res.status(200).json(partyPlace);
        } catch (error : any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async createPartyPlace(req: Request, res: Response): Promise<void> {
        try {
            const partyPlace = new PartyPlace(req.body);
            await partyPlace.save();
            res.status(201).json(partyPlace);
        } catch (error : any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getPartyPlaceById(req: Request, res: Response): Promise<void> {
        try {
            const partyPlace = await PartyPlace.findById(req.params.id);
            res.status(200).json(partyPlace);
        } catch (error : any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async updatePartyPlace(req: Request, res: Response): Promise<void> {
        try {
            const partyPlace = await PartyPlace.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(partyPlace);
        } catch (error : any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deletePartyPlace(req: Request, res: Response): Promise<void> {
        try {
            await PartyPlace.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'PartyPlace deleted successfully' });
        } catch (error : any) {
            res.status(500).json({ message: error.message });
        }
    }
}