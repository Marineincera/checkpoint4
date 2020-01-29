import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { CategoryPrice } from './categoryPrice.entity';

@Entity('price')
export class Price {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'bool', default: true })
    week!: boolean;

    @Column({ type: 'bool', default: true })
    weekEnd!: boolean;

    @Column({ type: 'bool', default: true })
    specialEvent!: boolean;

    @ManyToOne(type => CategoryPrice, categoryPrice => categoryPrice.prices)
    categoryPrice?: CategoryPrice;
}
