import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany, UpdateDateColumn } from 'typeorm';
import { CategoryPrice } from './categoryPrice.entity';
import { Representation } from './representation.entity';

@Entity('place')
export class Place {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 25, nullable: false })
    city!: string;

    @Column({ type: 'int', nullable: false })
    beginDate!: string;

    @Column({ type: 'int', nullable: true })
    endDate!: string;

    @OneToMany(type => Representation, representation => representation.place)
    representations!: Representation[];
}
