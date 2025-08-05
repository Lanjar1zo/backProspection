import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProspecteurService {
  constructor(private prisma: PrismaService) {} // eslint-disable-line no-unused-vars

  async create(data: {
    nomProspecteur: string;
    prenProspecteur: string;
    fonction: string;
    email: string;
    tel: string;
    password: string;
  }) {
    return this.prisma.prospecteur.create({ data });
  }
  async findAll() {
    return this.prisma.prospecteur.findMany({
      include: {
        producteur: true,
        prospection: true,
      },
    });
  }

  async findOne(id: bigint) {
    return this.prisma.prospecteur.findUnique({
      where: { ID_Prospecteur: id },
      include: {
        producteur: true,
        prospection: true,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.prospecteur.findUnique({
      where: { email },
      select: {
        ID_Prospecteur: true,
        nomProspecteur: true,
        prenProspecteur: true,
        fonction: true,
        email: true,
        tel: true,
        password: true,
      },
    });
  }
}
