import { Test, TestingModule } from '@nestjs/testing';
import { PlanteAttaqueResolver } from './plante-attaque.resolver';

describe('PlanteAttaqueResolver', () => {
  let resolver: PlanteAttaqueResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanteAttaqueResolver],
    }).compile();

    resolver = module.get<PlanteAttaqueResolver>(PlanteAttaqueResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
