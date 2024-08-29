import { Module } from '@nestjs/common';
import { Category } from './categories.entity';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    controllers: [CategoriesController],
    providers: [CategoriesService],
    exports: [TypeOrmModule],
})
export class CategoriesModule { }
