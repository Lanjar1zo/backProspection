import { Test, TestingModule } from '@nestjs/testing';
import { EchantillonResolver } from './echantillon.resolver';

describe('EchantillonResolver', () => {
  let resolver: EchantillonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EchantillonResolver],
    }).compile();

    resolver = module.get<EchantillonResolver>(EchantillonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
