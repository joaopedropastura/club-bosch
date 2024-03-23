import { Request, Response } from 'express';

import User  from '../schemas/User';

export default class UserController {
  public async getUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const users = await User.find();

    return res.json(users);
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
