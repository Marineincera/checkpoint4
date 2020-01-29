import { Application, Request, Response } from 'express';
import { commonController } from '../core/abstract.controller';
import { PriceService } from '../services/price.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const PriceController = (app: Application) => {
    const priceService = new PriceService();

    let priceRouter = commonController(priceService);

    // Ajoutez les nouvelles routes ici

    priceRouter = commonController(priceService, priceRouter);
    app.use('/prices', priceRouter);
};
