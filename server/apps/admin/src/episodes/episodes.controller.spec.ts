import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeController } from './episodes.controller';

describe('EpisodeController', () => {
  let controller: EpisodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EpisodeController],
    }).compile();

    controller = module.get<EpisodeController>(EpisodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
