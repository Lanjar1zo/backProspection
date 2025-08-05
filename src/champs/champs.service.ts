import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChampsService {
  constructor(private prisma: PrismaService) {} // eslint-disable-line no-unused-vars

  async create(data: {
    ID_Champs: bigint;
    culture: string;
    variete: string;
    supTotal: number;
    supInfecte: number;
    dateSemi: Date;
    irrigation: string;
    engrai: string;
    stadeCroissance: string;
    santeGle: string;
    nomRavageur: string;
    localisation: string;
    ID_Producteur: bigint;
  }) {
    return this.prisma.champs.create({ data });
  }

  async findAll() {
    return this.prisma.champs.findMany({
      include: {
        producteur: true,
        planteAttaque: true,
      },
    });
  }

  async findOne(id: bigint) {
    return this.prisma.champs.findUnique({
      where: { ID_Champs: id },
      include: {
        producteur: true,
        planteAttaque: true,
      },
    });
  }
}
