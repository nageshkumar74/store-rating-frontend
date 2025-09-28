import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Rating } from '../../rating/entities/rating.entity';

@Entity()
export class Store {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 60 })
    name: string;

    @Column()
    email: string;

    @Column({ length: 400 })
    address: string;

    @ManyToOne(() => User, (user) => user.stores)
    owner: User;

    @OneToMany(() => Rating, (rating) => rating.store)
    ratings: Rating[];
}
