// src/data-sources/data-sources.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { DataSourcesService } from './data-sources.service';
import { DataSourceEntity } from './data-sources.entity';


@Controller('data-sources')
export class DataSourcesController {
  constructor(private readonly dataSourcesService: DataSourcesService) { }

  @Get()
  findAll(): Promise<DataSourceEntity[]> {
    return this.dataSourcesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DataSourceEntity> {
    return this.dataSourcesService.findOne(+id);
  }

  @Post()
  create(@Body() dataSource: DataSourceEntity): Promise<DataSourceEntity> {
    return this.dataSourcesService.create(dataSource);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.dataSourcesService.remove(+id);
  }
}
