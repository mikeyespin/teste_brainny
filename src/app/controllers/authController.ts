import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class AuthController {
             
       async auth(req: Request, res: Response) {

        const repo = getRepository(User);

        const { email, password } = req.body;

        try {
            
            const user = await repo.findOne({ where: { email } });

            if (!user) {
                return res.status(400).send({ error: 'User already exists' });                
            }

            if(!await bcrypt.compare(password, user.password))
                return res.status(400).send({ error: 'Invalid password'});

            const token = jwt.sign({ id: user.id}, 'secret', {expiresIn: '1d'});

            return res.json({
                user, 
                token,
            })


        } catch (error) {

            return res.status(400).send({ error: 'Registration failed'});
            
        }


    }
}

export default AuthController;