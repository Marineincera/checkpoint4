import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany, JoinTable } from 'typeorm';
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

    @Column({ type: 'varchar', length: 255, nullable: false, default: '' })
    password!: string;

    @Column({ type: 'bool', default: false })
    activated?: boolean;

    @ManyToOne(type => UserRole, userRole => userRole.users, { onDelete: 'CASCADE' })
    userRole?: UserRole;

    @ManyToMany(type => Performance, { onDelete: 'CASCADE' })
    @JoinTable()
    performances?: Performance[];

    @OneToMany(type => Message, message => message.user, { onDelete: 'CASCADE' })
    messages?: Message[];

}
