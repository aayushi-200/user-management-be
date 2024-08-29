import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './sections.entity';
import { SectionsController } from './section.controller';
import { SectionsService } from './section.service';

@Module({
    imports: [TypeOrmModule.forFeature([Section])],
    controllers: [SectionsController],
    providers: [SectionsService],
    exports: [TypeOrmModule],
})
export class SectionsModule {}
