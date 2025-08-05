import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Plante_Attaque } from 'src/plante-attaque/entities/planteAttaque.entity';
import { Symptome } from 'src/symptome/entities/symptome.entity';

@ObjectType()
export class Partie_Plante {
  @Field(() => GraphQLBigInt)
  ID_PartiePlante: bigint;

  @Field()
  partiePlante: string;

  @Field(() => GraphQLBigInt)
  ID_PlanteAttaque: bigint;

  @Field(() => Plante_Attaque)
  planteAttaque: Plante_Attaque;

  @Field(() => [Symptome])
  symptome: Symptome[];
}
