// src/charts/charts.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ChartsService } from './charts.service';
import { Chart } from './charts.entity';


@Controller('charts')
export class ChartsController {
  constructor(private readonly chartsService: ChartsService) {}

  @Get()
  findAll(): Promise<Chart[]> {
    return this.chartsService.findAll();
  }

//   @Get(':id')
//   findOne(@Param('id') id: string): Promise<Chart> {
//     return this.chartsService.findOne(+id);
//   }

  @Post()
  create(@Body() chart: Chart): Promise<Chart> {
    return this.chartsService.create(chart);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.chartsService.remove(+id);
  }
}
