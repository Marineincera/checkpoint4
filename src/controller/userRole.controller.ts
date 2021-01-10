import { Application } from 'express';
import { commonController } from '../core/abstract.controller';
import { UserRoleService } from '../services/userRole.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const UserRoleController = (app: Application) => {
    const userRoleService = new UserRoleService();

    const userRoleRouter = commonController(userRoleService);

    // Ajoutez les nouvelles routes ici

    app.use('/userroles', userRoleRouter);
};
