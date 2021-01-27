import {  Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany } from 'typeorm';
import bcrypt from 'bcryptjs';
import Time from './Time';

@Entity('user')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(type => Time, user => User )
    time: Time;

    @Column()
    email: string; 

    @Column()
    password: string;
    

    @BeforeInsert()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    @Column()
    role: string;
}

export default User;