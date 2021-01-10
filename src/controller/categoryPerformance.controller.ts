import { Application } from 'express';
import { commonController } from '../core/abstract.controller';
import { CategoryPerformanceService } from '../services/categoryPerformance.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const CategoryPerformanceController = (app: Application) => {
    const categoryPerformanceService = new CategoryPerformanceService();

    const categoryPerformanceRouter = commonController(categoryPerformanceService);

    // Ajoutez les nouvelles routes ici

    app.use('/categoriesperformances', categoryPerformanceRouter);
};
