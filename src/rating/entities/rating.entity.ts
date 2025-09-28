import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Store } from '../../store/entities/store.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number; // Rating value, 1 to 5

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.ratings)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Store, (store) => store.ratings)
  @JoinColumn({ name: 'storeId' })
  store: Store;
}
