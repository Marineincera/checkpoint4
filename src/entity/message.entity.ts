import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { User } from './user.entity';
import { Performance } from './performance.entity';

@Entity('message')
export class Message {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: false, default: '' })
    text!: string;

    @Column({ type: 'varchar', length: 140, nullable: false, default: '' })
    object!: string;

    @Column({ type: 'varchar', length: 140, nullable: false, default: '' })
    mailAuthor!: string;

    @ManyToOne(type => Performance, performance => performance.messages, { onDelete: 'CASCADE' })
    performance?: Performance;

    @ManyToOne(type => User, user => user.messages, { onDelete: 'CASCADE' })
    user?: User;
}
