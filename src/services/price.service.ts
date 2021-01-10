import { PriceRepository } from '../repository/price.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class PriceService extends AbstractService {

    protected repository = getCustomRepository(PriceRepository);

    constructor() {
        super();
    }

    relationEntities = ['categoryPrice'];

    getAll() {
        return this.repository.find({ relations: this.relationEntities });
    }

    getById(id: number) {
        return this.repository.findOne(id, { relations: this.relationEntities, where: { id } });
    }

    add(element: any) {
        return this.repository.save(element);
    }

    update(idElement: any, element: any) {
        return this.repository.update(idElement, element);
    }

}
