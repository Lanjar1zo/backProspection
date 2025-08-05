import { Test, TestingModule } from '@nestjs/testing';
import { PlanteAttaqueService } from './plante-attaque.service';

describe('PlanteAttaqueService', () => {
  let service: PlanteAttaqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanteAttaqueService],
    }).compile();

    service = module.get<PlanteAttaqueService>(PlanteAttaqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
