
import { PerformanceRepository } from '../repository/performance.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class PerformanceService extends AbstractService {

    protected repository = getCustomRepository(PerformanceRepository);

    constructor() {
        super();
    }

}