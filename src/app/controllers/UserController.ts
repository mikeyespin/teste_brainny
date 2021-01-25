import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';


class UserController {
    async create(req: Request, res: Response) {
       
        const repo = getRepository(User);
        
        const { email } = req.body;

        try {

            const userExists = await repo.findOne({ where: { email} });

            if(userExists) {
                return res.status(400).send({ error: 'User already exists' });
            }

            const user = repo.create(req.body);
            await repo.save(user);

            return res.json(user);
            
            
        } catch (error) {

            return res.status(400).send({ error: 'Registration failed'});
            
        }


        
    };

 
}

export default new UserController();