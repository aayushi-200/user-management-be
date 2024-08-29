// src/charts/chart.entity.ts
import { DataSourceEntity } from 'src/data-sources/data-sources.entity';
import { Section } from 'src/sections/sections.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';

  
  @Entity('charts')
  export class Chart {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    type: string;
  
    @Column({ nullable: true })
    description: string;
  
    // @ManyToOne(() => Section, (section) => section.charts)
    // @JoinColumn({ name: 'section_id' })
    // section: Section;
  
    @ManyToOne(() => DataSourceEntity, (dataSource) => dataSource.charts)
    @JoinColumn({ name: 'data_source_id' })
    dataSource: DataSourceEntity;
  
  }
  