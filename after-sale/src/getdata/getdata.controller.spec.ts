import { Test, TestingModule } from '@nestjs/testing';
import { GetdataController } from './getdata.controller';

describe('Getdata Controller', () => {
  let controller: GetdataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetdataController],
    }).compile();

    controller = module.get<GetdataController>(GetdataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
