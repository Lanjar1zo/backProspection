import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChampsService } from './champs.service';
import { ChampsResolver } from './champs.resolver';

@Module({
  providers: [ChampsService, ChampsResolver, PrismaService],
})
export class ChampsModule {}
