
import { Chart } from 'src/charts/charts.entity';
import { Section } from 'src/sections/sections.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';


@Entity('data_sources')
export class DataSourceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Chart, (chart) => chart.dataSource)
  charts: Chart[];
  @OneToMany(() => Section, (Section) => Section.dataSource)
  Section: Section[];

}
