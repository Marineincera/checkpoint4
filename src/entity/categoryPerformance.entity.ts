import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { User } from './user.entity';
import { Performance } from './performance.entity';

@Entity('categoryPerformance')
export class CategoryPerformance {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 25, nullable: false })
    name!: string;

    @OneToMany(type => Performance, performance => performance.categoryPerformance)
    performances?: Performance[];
}
