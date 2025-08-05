import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SymptomeService {
  constructor(private prisma: PrismaService) {} // eslint-disable-line no-unused-vars

  async create(data: { ID_Symptome: bigint, description: string; ID_PartiePlante: bigint }) {
    return this.prisma.symptome.create({ data });
  }

  async findAll() {
    return this.prisma.symptome.findMany({
      include: {
        partiePlante: true,
      },
    });
  }

  async findOne(id: bigint) {
    return this.prisma.symptome.findUnique({
      where: { ID_Symptome: id },
      include: {
        partiePlante: true,
      },
    });
  }
}
