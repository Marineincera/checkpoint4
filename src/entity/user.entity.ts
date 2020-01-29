import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { UserRole } from './userRole.entity';
import { Performance } from './performance.entity';
import { Message } from './message.entity';

@Entity('user')
export class User {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 25, nullable: false, default: '' })
    pseudo!: string;

    @Column({ type: 'varchar', length: 150, nullable: false, default: '' })
    email!: string;

    @ManyToOne(type => UserRole, userRole => userRole.user)
    userRole?: UserRole;

    @ManyToMany(type => Performance, performance => performance.users)
    performances?: Performance[];

    @OneToMany(type => Message, message => message.user)
    messages?: Message[];

}
