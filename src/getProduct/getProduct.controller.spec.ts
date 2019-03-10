import { Test, TestingModule } from '@nestjs/testing';
import { GetProductController } from './getProduct.controller';

describe('Order Controller', () => {
  let controller: GetProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetProductController],
    }).compile();

    controller = module.get<GetProductController>(GetProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
