import { Test, TestingModule } from '@nestjs/testing';
import { CustomObjectController } from './custom-object.controller';

describe('CustomObject Controller', () => {
  let controller: CustomObjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomObjectController],
    }).compile();

    controller = module.get<CustomObjectController>(CustomObjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
