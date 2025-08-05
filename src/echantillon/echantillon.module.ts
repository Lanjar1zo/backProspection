import { Module } from '@nestjs/common';
import { EchantillonService } from './echantillon.service';
import { EchantillonResolver } from './echantillon.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [EchantillonService, EchantillonResolver, PrismaService],
})
export class EchantillonModule {}
