import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

import { SectionsModule } from './sections/sections.module';
import { SubSectionsModule } from './sub-sections/sub-sections.module';
import { DataSourcesModule } from './data-sources/data-sources.module';
import { ChartsModule } from './charts/charts.module';
import { Category } from './categories/categories.entity';
import { User } from './users/user.entity';
import { SubSection } from './sub-sections/sub-section.entity';
import { Section } from './sections/sections.entity';
import { Chart } from './charts/charts.entity';
import { DataSourceEntity } from './data-sources/data-sources.entity';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'Password',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      schema: 'product',
      entities: [
        Category,
        User,
        SubSection,
        Section,
        Chart,
        Category,
        DataSourceEntity,
      ],
    }),
    UsersModule,
    CategoriesModule,
    SectionsModule,
    SubSectionsModule,
    DataSourcesModule,
    ChartsModule,
  ],
})
export class AppModule { }
