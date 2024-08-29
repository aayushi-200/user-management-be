import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceEntity } from './data-sources.entity';
import { DataSourcesController } from './data-source.controller';
import { DataSourcesService } from './data-sources.service';

@Module({
    imports: [TypeOrmModule.forFeature([DataSourceEntity])],
    controllers: [DataSourcesController],
    providers: [DataSourcesService],
    exports: [TypeOrmModule],
})
export class DataSourcesModule {}
