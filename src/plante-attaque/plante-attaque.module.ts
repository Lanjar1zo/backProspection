import { Module } from '@nestjs/common';
import { PlanteAttaqueService } from './plante-attaque.service';
import { PlanteAttaqueResolver } from './plante-attaque.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PlanteAttaqueService, PlanteAttaqueResolver, PrismaService],
})
export class PlanteAttaqueModule {}
