import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProspectionService {
  constructor(private prisma: PrismaService) {} // eslint-disable-line no-unused-vars

  async findAll() {
    return this.prisma.prospection.findMany({
      include: {
        prospecteur: true,
        echantillon: true,
      },
    });
  }

  async findOne(id: bigint) {
    return this.prisma.prospection.findUnique({
      where: { ID_Prospection: id },
      include: {
        prospecteur: true,
        echantillon: true,
      },
    });
  }

  async create(data: { ID_Prospection: bigint; ID_Prospecteur: bigint; date: Date }) {
    return this.prisma.prospection.create({ data });
  }
}
