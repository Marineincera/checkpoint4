import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { User } from './user.entity';
import { CategoryPerformance } from './categoryPerformance.entity';
import { Message } from './message.entity';
@Entity('performance')
export class Performance {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: false, default: '' })
    name!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    picture!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description!: string;

    @ManyToOne(type => CategoryPerformance, categoryPerf => categoryPerf.performances, { onDelete: 'CASCADE' })
    categoryPerformance?: CategoryPerformance;

    @OneToMany(type => Message, message => message.performance, { onDelete: 'CASCADE' })
    messages?: Message[];

}
