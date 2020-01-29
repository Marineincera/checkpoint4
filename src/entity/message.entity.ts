import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { User } from './user.entity';
import { Performance } from './performance.entity';

@Entity('message')
export class Message {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'text', nullable: false })
    text!: string;

    @Column({ type: 'varchar', length: 140, nullable: true })
    object!: string;

    @ManyToOne(type => Performance, performance => performance.messages)
    performances?: Performance;

    @ManyToOne(type => User, user => user.messages)
    user?: User;
}
