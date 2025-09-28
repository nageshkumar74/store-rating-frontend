import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Store } from '../../store/entities/store.entity';
import { Rating } from '../../rating/entities/rating.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 60 })
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ length: 400 })
    address: string;

    @Column({
        type: 'enum',
        enum: ['admin', 'user', 'store_owner'],
        default: 'user'
    })
    role: string;

    @OneToMany(() => Store, (store) => store.owner)
    stores: Store[];

    @OneToMany(() => Rating, (rating) => rating.user)
    ratings: Rating[];
}
