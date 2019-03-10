import { Test, TestingModule } from '@nestjs/testing';
import { CustomCollectionService } from './custom-collection.service';

describe('CustomCollectionService', () => {
  let service: CustomCollectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomCollectionService],
    }).compile();

    service = module.get<CustomCollectionService>(CustomCollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
