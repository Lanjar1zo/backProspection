import { Test, TestingModule } from '@nestjs/testing';
import { ProspectionService } from './prospection.service';

describe('ProspectionService', () => {
  let service: ProspectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProspectionService],
    }).compile();

    service = module.get<ProspectionService>(ProspectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
