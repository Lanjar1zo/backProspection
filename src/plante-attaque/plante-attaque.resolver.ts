import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Plante_Attaque } from './entities/planteAttaque.entity';
import { GraphQLBigInt } from 'graphql-scalars';
import { PlanteAttaqueService } from './plante-attaque.service';

@Resolver(() => Plante_Attaque)
export class PlanteAttaqueResolver {
  constructor(private readonly planteAttaqueService: PlanteAttaqueService) {} // eslint-disable-line no-unused-vars

  @Mutation(() => Plante_Attaque)
  async createPlanteAttaque(
    @Args('ID_PlanteAttaque') ID_PlanteAttaque: bigint,
    @Args('point1') point1: number,
    @Args('point2') point2: number,
    @Args('point3') point3: number,
    @Args('point4') point4: number,
    @Args('point5') point5: number,
    @Args('tauxInfestation') tauxInfestation: number,
    @Args('ID_Champs') ID_Champs: bigint,
  ) {
    return this.planteAttaqueService.create({
      ID_PlanteAttaque,
      point1,
      point2,
      point3,
      point4,
      point5,
      tauxInfestation,
      ID_Champs,
    });
  }

  @Query(() => [Plante_Attaque], { name: 'planteAttaques' })
  findAll() {
    return this.planteAttaqueService.findAll();
  }

  @Query(() => Plante_Attaque, { name: 'planteAttaque' })
  findOne(@Args('id', { type: () => GraphQLBigInt }) id: bigint) {
    return this.planteAttaqueService.findOne(id);
  }
}
