import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Champs } from 'src/champs/entities/champs.entity';
import { Prospecteur } from 'src/prospecteur/entities/prospecteur.entity';

@ObjectType()
export class Producteur {
  @Field(() => GraphQLBigInt)
  ID_Producteur: bigint;

  @Field()
  nomProd: string;

  @Field()
  cin: bigint;

  @Field()
  partenaire: string;

  @Field()
  region: string;

  @Field()
  district: string;

  @Field()
  commune: string;

  @Field()
  fokotany: string;

  @Field(() => GraphQLBigInt)
  ID_Pospecteur: bigint;

  @Field(() => Prospecteur)
  prospecteur: Prospecteur;

  @Field(() => [Champs])
  champs: Champs[];
}
