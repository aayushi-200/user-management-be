import { Section } from 'src/sections/sections.entity';
import { User } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';



@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  categoryId: number;

  @Column()
  name: string;

  @ManyToMany(() => User, user => user.categories)
  users: User[];

  @OneToMany(() => Section, section => section.category)
  sections: Section[];
}