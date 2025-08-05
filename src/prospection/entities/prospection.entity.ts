import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Echantillon } from 'src/echantillon/entities/echantillon.entity';
import { Prospecteur } from 'src/prospecteur/entities/prospecteur.entity';

@ObjectType()
export class Prospection {
  @Field(() => GraphQLBigInt)
  ID_Prospection: bigint;

  @Field(() => GraphQLBigInt)
  ID_Prospecteur: bigint;

  @Field()
  date: Date;

  @Field(() => Prospecteur)
  prospecteur: Prospecteur;

  @Field(() => [Echantillon])
  echantillon: Echantillon[];
}
