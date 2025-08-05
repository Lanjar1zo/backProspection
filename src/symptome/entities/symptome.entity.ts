import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Partie_Plante } from 'src/partie-plante/entities/partiePlante.entity';

@ObjectType()
export class Symptome {
  @Field(() => GraphQLBigInt)
  ID_Symptome: bigint;

  @Field()
  description: string;

  @Field(() => GraphQLBigInt)
  ID_PartiePlante: bigint;

  @Field(() => Partie_Plante)
  partiePlante: Partie_Plante;
}
