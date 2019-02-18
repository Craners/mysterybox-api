import { Test, TestingModule } from '@nestjs/testing';
import { GetDataController } from './getData.controller';

describe('Order Controller', () => {
  let controller: GetDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetDataController],
    }).compile();

    controller = module.get<GetDataController>(GetDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
