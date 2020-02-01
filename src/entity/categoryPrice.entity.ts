import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Price } from './price.entity';

@Entity('categoryPrice')
export class CategoryPrice {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 25, nullable: false, default: '' })
    name!: string;

    @OneToMany(type => Price, price => price.categoryPrice, { onDelete: 'CASCADE' })
    prices?: Price[];
}
