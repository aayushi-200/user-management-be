import { Section } from 'src/sections/sections.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity()
export class SubSection {
  @PrimaryGeneratedColumn()
  subSectionId: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  script: string;
  @Column({ nullable: true })
  close: Number;
  @Column({ nullable: true })
  dayHigh: Number;
  @Column({ nullable: true })
  dayLow: Number;
  @Column({ nullable: true })
  volume: Number;
  @Column({ nullable: true })
  delivery: Number;

  @ManyToOne(() => Section, section => section.subSections)
  section: Section;
}