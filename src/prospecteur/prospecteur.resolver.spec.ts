import { Test, TestingModule } from '@nestjs/testing';
import { ProspecteurResolver } from './prospecteur.resolver';

describe('ProspecteurResolver', () => {
  let resolver: ProspecteurResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProspecteurResolver],
    }).compile();

    resolver = module.get<ProspecteurResolver>(ProspecteurResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
