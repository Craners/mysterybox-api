import { Test, TestingModule } from '@nestjs/testing';
import { getDataService } from './getData.service';

describe('OrderService', () => {
  let service: getDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [getDataService],
    }).compile();

    service = module.get<getDataService>(getDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
