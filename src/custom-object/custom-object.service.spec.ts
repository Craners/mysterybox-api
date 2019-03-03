import { Test, TestingModule } from '@nestjs/testing';
import { CustomObjectService } from './custom-object.service';

describe('CustomObjectService', () => {
  let service: CustomObjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomObjectService],
    }).compile();

    service = module.get<CustomObjectService>(CustomObjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
