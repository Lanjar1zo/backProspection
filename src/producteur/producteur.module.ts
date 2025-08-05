import { Module } from '@nestjs/common';
import { ProducteurResolver } from './producteur.resolver';
import { ProducteurService } from './producteur.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ProducteurResolver, ProducteurService, PrismaService]
})
export class ProducteurModule {}
