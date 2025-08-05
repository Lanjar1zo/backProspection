import { Test, TestingModule } from '@nestjs/testing';
import { PartiePlanteResolver } from './partie-plante.resolver';

describe('PartiePlanteResolver', () => {
  let resolver: PartiePlanteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartiePlanteResolver],
    }).compile();

    resolver = module.get<PartiePlanteResolver>(PartiePlanteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
