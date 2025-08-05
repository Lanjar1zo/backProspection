import { Test, TestingModule } from '@nestjs/testing';
import { ProspecteurService } from './prospecteur.service';

describe('ProspecteurService', () => {
  let service: ProspecteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProspecteurService],
    }).compile();

    service = module.get<ProspecteurService>(ProspecteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
