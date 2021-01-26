import {  Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('user')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

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