// src/sub-sections/sub-sections.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { SubSection } from './sub-section.entity';
import { SubSectionsService } from './sub-section.service';

@Controller('sub-sections')
export class SubSectionsController {
  constructor(private readonly subSectionsService: SubSectionsService) { }

  @Get()
  findAll(): Promise<SubSection[]> {
    return this.subSectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubSection> {
    return this.subSectionsService.findOne(id);
  }

  @Post()
  create(@Body() subSection: SubSection): Promise<SubSection> {
    return this.subSectionsService.create(subSection);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.subSectionsService.remove(+id);
  }
}
