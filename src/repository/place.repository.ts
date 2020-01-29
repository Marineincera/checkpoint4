import { EntityRepository, Repository } from 'typeorm';
import { Place } from '../entity/place.entity';
/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requete sql)
 */

@EntityRepository(Place)
export class PlaceRepository extends Repository<Place> {

}
