import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Place } from './place.entity';

@Entity('representation')
export class Representation {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int', nullable: true })
    beginHour?: number;

    @ManyToOne(type => Place, place => place.representations, { onDelete: 'CASCADE' })
    place?: Place;
}
