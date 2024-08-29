import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chart } from './charts.entity';
import { ChartsController } from './charts.controller';
import { ChartsService } from './charts.service';

@Module({
    imports: [TypeOrmModule.forFeature([Chart])],
    controllers: [ChartsController],
    providers: [ChartsService],
    exports: [TypeOrmModule],
})
export class ChartsModule {}
