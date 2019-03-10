import { Test, TestingModule } from '@nestjs/testing';
import { CustomCollectionController } from './custom-collection.controller';

describe('CustomCollection Controller', () => {
  let controller: CustomCollectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomCollectionController],
    }).compile();

    controller = module.get<CustomCollectionController>(CustomCollectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
