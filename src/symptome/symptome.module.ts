import { Module } from '@nestjs/common';
import { SymptomeService } from './symptome.service';
import { SymptomeResolver } from './symptome.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [SymptomeService, SymptomeResolver, PrismaService],
})
export class SymptomeModule {}
