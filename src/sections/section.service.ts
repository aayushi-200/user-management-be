// src/sections/sections.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Section } from './sections.entity';


@Injectable()
export class SectionsService {
  constructor(
    @InjectRepository(Section)
    private sectionsRepository: Repository<Section>,
  ) {}

  findAll(): Promise<Section[]> {
    return this.sectionsRepository.find({ relations: ['subSections'] });
  }

  // findOne(id: number): Promise<Section> {
  //   return this.sectionsRepository.findOne(id, { relations: ['subSections'] });
  // }

  async create(section: Section): Promise<Section> {
    return this.sectionsRepository.save(section);
  }

  async remove(id: number): Promise<void> {
    await this.sectionsRepository.delete(id);
  }
}
