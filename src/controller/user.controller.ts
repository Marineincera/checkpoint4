import { Application, Request, Response, Router } from 'express';
import { UserService } from '../services/user.service';
import { commonController } from '../core/abstract.controller';
import { Token } from '../entity/token.entity';
import jwt = require('express-jwt');

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const UserController = (app: Application) => {

    const userService = new UserService();

    // Ajoutez les nouvelles routes ici
    let userRouter = Router();

    if (!process.env.CHECKPOINT_SECRET) {
        throw new Error('Secret is not defined');
    }
    userRouter.use(jwt({ secret: process.env.CHECKPOINT_SECRET }));

    const secret1 = process.env.CHECKPOINT_SECRET;

    if (!secret1) {
        throw new Error('Pas de secret SETUP');
    }
    userRouter.use(jwt({ secret: secret1 })); // secret = variable d'environnement

    userRouter.get('/me', async (req: Request, res: Response) => {

        const user = await userService.getMe((req as any).user.id);

        if (!user) {
            res.status(400).send('Aucun utuilisateur trouvé pour ce token');
        }
        res.send(user);
    });

    userRouter = commonController(userService, userRouter);
    app.use('/users', userRouter);
};
