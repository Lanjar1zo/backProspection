import { Module } from '@nestjs/common';
import { PartiePlanteService } from './partie-plante.service';
import { PartiePlanteResolver } from './partie-plante.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PartiePlanteService, PartiePlanteResolver, PrismaService],
})
export class PartiePlanteModule {}
