import { Section } from 'src/sections/sections.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity()
export class SubSection {
  @PrimaryGeneratedColumn()
  subSectionId: number;

  @Column()
  name: string;

  @ManyToOne(() => Section, section => section.subSections)
  section: Section;
}