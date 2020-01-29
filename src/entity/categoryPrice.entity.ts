import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Price } from './price.entity';

@Entity('categoryPrice')
export class CategoryPrice {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 25, nullable: false })
    name!: string;

    @OneToMany(type => Price, price => price.categoryPrice)
    prices?: Price[];
}
