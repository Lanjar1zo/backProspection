import { Module } from '@nestjs/common';
import { ProspectionService } from './prospection.service';
import { ProspectionResolver } from './prospection.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ProspectionService, ProspectionResolver, PrismaService]
})
export class ProspectionModule {}
