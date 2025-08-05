import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PartiePlanteService {
  constructor(private prisma: PrismaService) {} // eslint-disable-line no-unused-vars

  async create(data: { ID_PartiePlante: bigint; partiePlante: string; ID_PlanteAttaque: bigint }) {
    return this.prisma.partie_Plante.create({ data });
  }

  async findAll() {
    return this.prisma.partie_Plante.findMany({
      include: {
        planteAttaque: true,
        symptome: true,
      },
    });
  }

  async findOne(id: bigint) {
    return this.prisma.partie_Plante.findUnique({
      where: { ID_PartiePlante: id },
      include: {
        planteAttaque: true,
        symptome: true,
      },
    });
  }
}
