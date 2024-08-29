// src/sub-sections/sub-sections.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubSection } from './sub-section.entity';

@Injectable()
export class SubSectionsService {
  constructor(
    @InjectRepository(SubSection)
    private subSectionsRepository: Repository<SubSection>,
  ) {}

  findAll(): Promise<SubSection[]> {
    return this.subSectionsRepository.find();
  }

  // findOne(id: number): Promise<SubSection> {
  //   return this.subSectionsRepository.findOne(id);
  // }

  async create(subSection: SubSection): Promise<SubSection> {
    return this.subSectionsRepository.save(subSection);
  }

  async remove(id: number): Promise<void> {
    await this.subSectionsRepository.delete(id);
  }
}
