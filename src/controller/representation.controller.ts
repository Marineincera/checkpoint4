import { Application } from 'express';
import { commonController } from '../core/abstract.controller';
import { RepresentationService } from '../services/representation.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const RepresentationController = (app: Application) => {
    const representationService = new RepresentationService();

    const representationRouter = commonController(representationService);

    // Ajoutez les nouvelles routes ici

    app.use('/representations', representationRouter);
};
