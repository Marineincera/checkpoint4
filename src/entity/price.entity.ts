import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { CategoryPrice } from './categoryPrice.entity';

@Entity('price')
export class Price {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'bool', default: false })
    week!: boolean;

    @Column({ type: 'bool', default: false })
    weekEnd!: boolean;

    @Column({ type: 'bool', default: false })
    specialEvent!: boolean;

    @ManyToOne(type => CategoryPrice, categoryPrice => categoryPrice.prices)
    categoryPrice?: CategoryPrice;
}
