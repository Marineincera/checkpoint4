import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { User } from './user.entity';
import { CategoryPerformance } from './categoryPerf.entity';
import { Message } from './message.entity';
@Entity('performance')
export class Performance {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 25, nullable: false })
    name!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    picture!: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    description!: string;

    @ManyToOne(type => CategoryPerformance, categoryPerf => categoryPerf.performances)
    categoryPerformance?: CategoryPerformance;

    @ManyToMany(type => User, user => user.performances)
    users?: User[];

    @OneToMany(type => Message, message => message.performances)
    messages?: Message[];

}
