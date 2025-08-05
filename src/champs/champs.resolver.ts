import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Champs } from './entities/champs.entity';
import { ChampsService } from './champs.service';
import { GraphQLBigInt } from 'graphql-scalars';

@Resolver(() => Champs)
export class ChampsResolver {
  constructor(private readonly champsService: ChampsService) {} // eslint-disable-line no-unused-vars

  @Mutation(() => Champs)
  async createChamps(
    @Args('ID_Champs') ID_Champs: bigint,
    @Args('culture') culture: string,
    @Args('variete') variete: string,
    @Args('supTotal') supTotal: number,
    @Args('supInfecte') supInfecte: number,
    @Args('dateSemi') dateSemi: Date,
    @Args('irrigation') irrigation: string,
    @Args('engrai') engrai: string,
    @Args('stadeCroissance') stadeCroissance: string,
    @Args('santeGle') santeGle: string,
    @Args('nomRavageur') nomRavageur: string,
    @Args('localisation') localisation: string,
    @Args('ID_Producteur') ID_Producteur: bigint,
  ) {
    return this.champsService.create({
      ID_Champs,
      culture,
      variete,
      supTotal,
      supInfecte,
      dateSemi,
      irrigation,
      engrai,
      stadeCroissance,
      santeGle,
      nomRavageur,
      localisation,
      ID_Producteur,
    });
  }

  @Query(() => [Champs], { name: 'champs' })
  findAll() {
    return this.champsService.findAll();
  }

  @Query(() => Champs, { name: 'champ' })
  findOne(@Args('id', { type: () => GraphQLBigInt }) id: bigint) {
    return this.champsService.findOne(id);
  }
}
