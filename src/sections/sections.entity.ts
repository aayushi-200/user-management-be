import { Category } from 'src/categories/categories.entity';
import { SubSection } from 'src/sub-sections/sub-section.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  sectionId: number;

  @Column()
  name: string;

  @ManyToOne(() => Category, category => category.sections)
  category: Category;

  @OneToMany(() => SubSection, subSection => subSection.section)
  subSections: SubSection[];
}