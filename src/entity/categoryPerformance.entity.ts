import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { User } from './user.entity';
import { Performance } from './performance.entity';

@Entity('categoryPerformance')
export class CategoryPerformance {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 25, nullable: false, default: '' })
    name!: string;

    @OneToMany(type => Performance, performance => performance.categoryPerformance, { onDelete: 'CASCADE' })
    performances?: Performance[];
}
