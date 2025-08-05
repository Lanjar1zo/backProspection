import { Test, TestingModule } from '@nestjs/testing';
import { SymptomeResolver } from './symptome.resolver';

describe('SymptomeResolver', () => {
  let resolver: SymptomeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SymptomeResolver],
    }).compile();

    resolver = module.get<SymptomeResolver>(SymptomeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
