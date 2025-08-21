import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProducteurService {
  constructor(private prisma: PrismaService) {} // eslint-disable-line no-unused-vars

  async create(data: {
    ID_Producteur: bigint;
    nomProd: string;
    cin: bigint;
    partenaire?: string | null;
    region: string;
    district: string;
    commune: string;
    fokotany: string;
    ID_Prospecteur: bigint;
  }) {
    return this.prisma.producteur.create({ data });
  }

  async findAll() {
    return this.prisma.producteur.findMany({
      include: {
        prospecteur: true,
        champs: true,
      },
    });
  }

  async findOne(id: bigint) {
    return this.prisma.producteur.findUnique({
      where: { ID_Producteur: id },
      include: {
        prospecteur: true,
        champs: true,
      },
    });
  }
}
