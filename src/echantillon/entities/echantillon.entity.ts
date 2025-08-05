import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Prospection } from 'src/prospection/entities/prospection.entity';

@ObjectType()
export class Echantillon {
  @Field(() => GraphQLBigInt)
  ID_Echantillon: bigint;

  @Field()
  nature: string;

  @Field()
  poids: number;

  @Field()
  nbrEchantillon: number;

  @Field()
  analyseAFaire: string;

  @Field(() => GraphQLBigInt)
  ID_Prospection: bigint;

  @Field(() => Prospection)
  prospection: Prospection;
}
