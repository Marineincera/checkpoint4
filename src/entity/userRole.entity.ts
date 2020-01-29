import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('userRole')
export class UserRole {

    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 150, nullable: false, default: '' })
    name!: string;

    @OneToMany(type => User, user => user.userRole)
    users?: User[];
}
