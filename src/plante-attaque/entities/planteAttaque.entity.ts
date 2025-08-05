import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Champs } from 'src/champs/entities/champs.entity';
import { Partie_Plante } from 'src/partie-plante/entities/partiePlante.entity';

@ObjectType()
export class Plante_Attaque {
  @Field(() => GraphQLBigInt)
  ID_PlanteAttaque: bigint;

  @Field()
  point1: number;

  @Field()
  point2: number;

  @Field()
  point3: number;

  @Field()
  point4: number;

  @Field()
  point5: number;

  @Field()
  tauxInfestation: number;

  @Field(() => GraphQLBigInt)
  ID_Champs: bigint;

  @Field(() => Champs)
  champs: Champs;

  @Field(() => [Partie_Plante])
  partiePlante: Partie_Plante[];
}
