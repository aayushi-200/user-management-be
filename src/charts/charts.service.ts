// src/charts/charts.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chart } from './charts.entity';


@Injectable()
export class ChartsService {
  constructor(
    @InjectRepository(Chart)
    private chartsRepository: Repository<Chart>,
  ) {}

  findAll(): Promise<Chart[]> {
    return this.chartsRepository.find();
  }

//   findOne(id: number): Promise<Chart> {
//     return this.chartsRepository.findOne(id);
//   }

  async create(chart: Chart): Promise<Chart> {
    return this.chartsRepository.save(chart);
  }

  async remove(id: number): Promise<void> {
    await this.chartsRepository.delete(id);
  }
}
