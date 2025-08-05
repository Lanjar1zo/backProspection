import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prospection } from './entities/prospection.entity';
import { GraphQLBigInt } from 'graphql-scalars';
import { ProspectionService } from './prospection.service';

@Resolver(() => Prospection)
export class ProspectionResolver {
  constructor(private readonly prospectionService: ProspectionService) {} // eslint-disable-line no-unused-vars

  @Query(() => [Prospection], { name: 'prospections' })
  findAll() {
    return this.prospectionService.findAll();
  }

  @Query(() => Prospection, { name: 'prospection' })
  findOne(@Args('id', { type: () => GraphQLBigInt }) id: bigint) {
    return this.prospectionService.findOne(id);
  }

  @Mutation(() => Prospection)
  async createProspection(
    @Args('ID_Prospection') ID_Prospection: bigint,
    @Args('ID_Prospecteur') ID_Prospecteur: bigint,
    @Args('date') date: Date,
  ) {
    return this.prospectionService.create({
      ID_Prospection,
      ID_Prospecteur,
      date,
    });
  }
}
