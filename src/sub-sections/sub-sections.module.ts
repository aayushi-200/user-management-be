import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubSection } from './sub-section.entity';
import { SubSectionsController } from './sub-section.controller';
import { SubSectionsService } from './sub-section.service';

@Module({
    imports: [TypeOrmModule.forFeature([SubSection])],
    controllers: [SubSectionsController],
    providers: [SubSectionsService],
    exports: [TypeOrmModule],
})
export class SubSectionsModule {}
