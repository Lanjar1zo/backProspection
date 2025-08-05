import { Test, TestingModule } from '@nestjs/testing';
import { ChampsResolver } from './champs.resolver';

describe('ChampsResolver', () => {
  let resolver: ChampsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChampsResolver],
    }).compile();

    resolver = module.get<ChampsResolver>(ChampsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
