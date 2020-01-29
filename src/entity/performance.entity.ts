import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { User } from './user.entity';
import { CategoryPerformance } from './categoryPerformance.entity';
import { Message } from './message.entity';
@Entity('performance')
export class Performance {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 25, nullable: false, default: '' })
    name!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    picture!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description!: string;

    @ManyToOne(type => CategoryPerformance, categoryPerf => categoryPerf.performances)
    categoryPerformance?: CategoryPerformance;

    @OneToMany(type => Message, message => message.performance)
    messages?: Message[];

}
