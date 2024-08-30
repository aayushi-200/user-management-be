// src/sections/sections.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Section } from './sections.entity';
import { SectionsService } from './section.service';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) { }

  @Get()
  findAll(): Promise<Section[]> {
    return this.sectionsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<Section> {
  //   return this.sectionsService.findOne(+id);
  // }

  @Post()
  create(@Body() section: Section): Promise<Section> {
    return this.sectionsService.create(section);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.sectionsService.remove(+id);
  }
}
