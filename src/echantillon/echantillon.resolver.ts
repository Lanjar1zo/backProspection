import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Echantillon } from './entities/echantillon.entity';
import { GraphQLBigInt } from 'graphql-scalars';
import { EchantillonService } from './echantillon.service';

@Resolver(() => Echantillon)
export class EchantillonResolver {
  constructor(private readonly echantillonService: EchantillonService) {} // eslint-disable-line no-unused-vars

  @Mutation(() => Echantillon)
  async createEchantillon(
    @Args('ID_Echantillon') ID_Echantillon: bigint,
    @Args('nature') nature: string,
    @Args('poids') poids: number,
    @Args('nbrEchantillon') nbrEchantillon: number,
    @Args('analyseAFaire') analyseAFaire: string,
    @Args('ID_Prospection') ID_Prospection: bigint,
  ) {
    return this.echantillonService.create({
      ID_Echantillon,
      nature,
      poids,
      nbrEchantillon,
      analyseAFaire,
      ID_Prospection,
    });
  }

  @Query(() => [Echantillon], { name: 'echantillons' })
  findAll() {
    return this.echantillonService.findAll();
  }

  @Query(() => Echantillon, { name: 'echantillon' })
  findOne(@Args('id', { type: () => GraphQLBigInt }) id: bigint) {
    return this.echantillonService.findOne(id);
  }
}
