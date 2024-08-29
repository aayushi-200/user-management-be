// src/data-sources/data-sources.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataSourceEntity } from './data-sources.entity';


@Injectable()
export class DataSourcesService {
  constructor(
    @InjectRepository(DataSourceEntity)
    private dataSourcesRepository: Repository<DataSourceEntity>,
  ) { }

  findAll(): Promise<DataSourceEntity[]> {
    return this.dataSourcesRepository.find({
      relations: { charts: true }
    });
  }

  findOne(id: any): Promise<DataSourceEntity> {
    return this.dataSourcesRepository.findOne(id);

  }

  async create(dataSource: DataSourceEntity): Promise<DataSourceEntity> {
    return this.dataSourcesRepository.save(dataSource);
  }

  async remove(id: number): Promise<void> {
    await this.dataSourcesRepository.delete(id);
  }
}
