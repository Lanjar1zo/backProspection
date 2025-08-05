import { Test, TestingModule } from '@nestjs/testing';
import { SymptomeService } from './symptome.service';

describe('SymptomeService', () => {
  let service: SymptomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SymptomeService],
    }).compile();

    service = module.get<SymptomeService>(SymptomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
