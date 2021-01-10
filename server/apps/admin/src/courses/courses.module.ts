import { Course } from '@libs/db/models/course.model';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { CoursesController } from './courses.controller';

@Module({
  imports: [TypegooseModule.forFeature([Course])],
  controllers: [CoursesController]
})
export class CoursesModule { }
