import { Test, TestingModule } from '@nestjs/testing';
import { PartiePlanteService } from './partie-plante.service';

describe('PartiePlanteService', () => {
  let service: PartiePlanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartiePlanteService],
    }).compile();

    service = module.get<PartiePlanteService>(PartiePlanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
