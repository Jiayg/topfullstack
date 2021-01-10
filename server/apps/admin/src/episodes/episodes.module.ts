import { Episode } from '@libs/db/models/episodes.model';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { EpisodesController } from './episodes.controller';

@Module({
  imports: [TypegooseModule.forFeature([Episode])],
  controllers: [EpisodesController]
})
export class EpisodesModule { }
