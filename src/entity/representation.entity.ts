import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Place } from './place.entity';

@Entity('representation')
export class Representation {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'int', length: 25, nullable: false })
    beginHour!: number;

    @ManyToOne(type => Place, place => place.representations)
    place?: Place;
}
