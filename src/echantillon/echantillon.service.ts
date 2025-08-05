import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EchantillonService {
  constructor(private prisma: PrismaService) {} // eslint-disable-line no-unused-vars

  async create(data: {
    ID_Echantillon: bigint;
    nature: string;
    poids: number;
    nbrEchantillon: number;
    analyseAFaire: string;
    ID_Prospection: bigint;
  }) {
    return this.prisma.echantillon.create({ data });
  }

  async findAll() {
    return this.prisma.echantillon.findMany({
      include: {
        prospection: true,
      },
    });
  }

  async findOne(id: bigint) {
    return this.prisma.echantillon.findUnique({
      where: { ID_Echantillon: id },
      include: {
        prospection: true,
      },
    });
  }
}
