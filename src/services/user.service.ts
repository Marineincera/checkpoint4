import { UserRepository } from '../repository/user.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';
import { User } from '../entity/user.entity';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class UserService extends AbstractService {

    protected repository = getCustomRepository(UserRepository);

    constructor() {
        super();
    }

    relationEntities = ['userRole', 'performances'];

    getAll() {
        return this.repository.find({ relations: this.relationEntities });
    }

    getById(id: number) {
        return this.repository.findOne(id, { relations: this.relationEntities, where: { user: id } });
    }

    add(element: any) {
        return this.repository.save(element);
    }

    update(idElement: any, element: any) {
        return this.repository.update(idElement, element);
    }

    async activUserAccount(user: User) {
        user.activated = true;
        return await this.repository.update(user.id, user);
    }

    async getMe(id: number) {
        return await this.repository.findOne(id, {
            select: ['email', 'pseudo', 'userRole', 'activated', 'id'],
            relations: this.relationEntities
        });
    }
}
