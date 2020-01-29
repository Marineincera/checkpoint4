import { Application, Request, Response } from 'express';
import { commonController } from '../core/abstract.controller';
import { PerformanceService } from '../services/performance.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const PerformanceController = (app: Application) => {
    const performanceService = new PerformanceService();

    let performanceRouter = commonController(performanceService);

    // Ajoutez les nouvelles routes ici

    performanceRouter = commonController(performanceService, performanceRouter);
    app.use('/performances', performanceRouter);
};
