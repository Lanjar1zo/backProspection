import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Symptome } from './entities/symptome.entity';
import { GraphQLBigInt } from 'graphql-scalars';
import { SymptomeService } from './symptome.service';

@Resolver(() => Symptome)
export class SymptomeResolver {
  constructor(private readonly symptomeService: SymptomeService) {} // eslint-disable-line no-unused-vars

  @Mutation(() => Symptome)
  async createSymptome(
    @Args('ID_Symptome') ID_Symptome: bigint,
    @Args('description') description: string,
    @Args('ID_PartiePlante') ID_PartiePlante: bigint,
  ) {
    return this.symptomeService.create({ ID_Symptome, description, ID_PartiePlante });
  }

  @Query(() => [Symptome], { name: 'symptomes' })
  findAll() {
    return this.symptomeService.findAll();
  }

  @Query(() => Symptome, { name: 'symptome' })
  findOne(@Args('id', { type: () => GraphQLBigInt }) id: bigint) {
    return this.symptomeService.findOne(id);
  }
}
