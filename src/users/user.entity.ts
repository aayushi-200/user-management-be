
import { Category } from 'src/categories/categories.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  role: string;

  @ManyToMany(() => Category, category => category.users)
  @JoinTable()
  categories: Category[];
}
