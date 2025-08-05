import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Partie_Plante } from './entities/partiePlante.entity';
import { GraphQLBigInt } from 'graphql-scalars';
import { PartiePlanteService } from './partie-plante.service';

@Resolver(() => Partie_Plante)
export class PartiePlanteResolver {
  constructor(private readonly partiePlanteService: PartiePlanteService) {} // eslint-disable-line no-unused-vars

  @Mutation(() => Partie_Plante)
  async createPartiePlante(
    @Args('ID_PartiePlante') ID_PartiePlante: bigint,
    @Args('partiePlante') partiePlante: string,
    @Args('ID_PlanteAttaque') ID_PlanteAttaque: bigint,
  ) {
    return this.partiePlanteService.create({ ID_PartiePlante, partiePlante, ID_PlanteAttaque });
  }

  @Query(() => [Partie_Plante], { name: 'partiePlantes' })
  findAll() {
    return this.partiePlanteService.findAll();
  }

  @Query(() => Partie_Plante, { name: 'partiePlante' })
  findOne(@Args('id', { type: () => GraphQLBigInt }) id: bigint) {
    return this.partiePlanteService.findOne(id);
  }
}
