import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany, UpdateDateColumn } from 'typeorm';
import { CategoryPrice } from './categoryPrice.entity';
import { Representation } from './representation.entity';

@Entity('place')
export class Place {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    city!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    beginDate!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    endDate!: string;

    @OneToMany(type => Representation, representation => representation.place)
    representations?: Representation[];
}
