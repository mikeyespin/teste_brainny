import {  Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import User from './User';

@Entity('time')
class Time {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type=> User, times => Time)
    user: User 

    @Column()
    registered_time: Date;
}

export default Time;