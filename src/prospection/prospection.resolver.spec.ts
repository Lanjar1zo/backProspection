import { Test, TestingModule } from '@nestjs/testing';
import { ProspectionResolver } from './prospection.resolver';

describe('ProspectionResolver', () => {
  let resolver: ProspectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProspectionResolver],
    }).compile();

    resolver = module.get<ProspectionResolver>(ProspectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
