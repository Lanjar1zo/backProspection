import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlanteAttaqueService {
  constructor(private prisma: PrismaService) {} // eslint-disable-line no-unused-vars

  async create(data: {
    ID_PlanteAttaque: bigint;
    point1: number;
    point2: number;
    point3: number;
    point4: number;
    point5: number;
    tauxInfestation: number;
    ID_Champs: bigint;
  }) {
    return this.prisma.plante_Attaque.create({ data });
  }

  async findAll() {
    return this.prisma.plante_Attaque.findMany({
      include: {
        champs: true,
        partiePlante: true,
      },
    });
  }

  async findOne(id: bigint) {
    return this.prisma.plante_Attaque.findUnique({
      where: { ID_PlanteAttaque: id },
      include: {
        champs: true,
        partiePlante: true,
      },
    });
  }
}
