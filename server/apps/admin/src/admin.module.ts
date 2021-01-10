import { CommonModule } from './../../../libs/common/src/common.module';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { DbModule } from './../../../libs/db/src/db.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MulterModule.register({
      dest: 'uploads'
    }),
    CommonModule,
    DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule { }
