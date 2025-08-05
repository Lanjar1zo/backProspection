import { Module } from '@nestjs/common';
import { ProspecteurService } from './prospecteur.service';
import { ProspecteurResolver } from './prospecteur.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ProspecteurService, ProspecteurResolver, PrismaService],
})
export class ProspecteurModule {}
