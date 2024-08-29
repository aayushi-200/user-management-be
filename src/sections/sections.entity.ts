import { Category } from 'src/categories/categories.entity';
import { DataSourceEntity } from 'src/data-sources/data-sources.entity';
import { SubSection } from 'src/sub-sections/sub-section.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, DataSource } from 'typeorm';

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

  @ManyToOne(() => DataSourceEntity, (dataSource) => dataSource.Section)
  @JoinColumn({ name: 'data_sources_id' })
  dataSource: DataSourceEntity;
}