import { Application } from 'express';
import { commonController } from '../core/abstract.controller';
import { PlaceService } from '../services/place.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const PlaceController = (app: Application) => {
    const placeService = new PlaceService();

    const placeRouter = commonController(placeService);

    // Ajoutez les nouvelles routes ici

    app.use('/places', placeRouter);
};
