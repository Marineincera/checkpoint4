import { Application } from 'express';
import { commonController } from '../core/abstract.controller';
import { CategoryPriceService } from '../services/categoryPrice.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const CategoryPriceController = (app: Application) => {
    const categoryPriceService = new CategoryPriceService();

    let categoryPriceRouter = commonController(categoryPriceService);

    // Ajoutez les nouvelles routes ici

    categoryPriceRouter = commonController(categoryPriceService, categoryPriceRouter);
    app.use('/categoriesprices', categoryPriceRouter);
};
