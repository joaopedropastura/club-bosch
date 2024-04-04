import { Request, Response } from 'express';

import User  from '../schemas/User';

export default class UserController {
  public async getUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    return res.json(id ? await User.findById(id) : await User.find());
    

  }

  public async create(req: Request, res: Response): Promise<Response> {
    try{
        const user = await User.create(req.body);
        return res.json(user);

    } catch (error){
        console.log(error);
        return res.json(error);
    }
  }
}
