import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Producteur } from 'src/producteur/entities/producteur.entity';
import { Prospection } from 'src/prospection/entities/prospection.entity';

@ObjectType()
export class Prospecteur {
  @Field(() => GraphQLBigInt)
  ID_Prospecteur: bigint;

  @Field()
  nomProspecteur: string;

  @Field()
  prenProspecteur: string;

  @Field()
  fonction: string;

  @Field()
  email: string;

  @Field()
  tel: string;

  @Field()
  password: string;

  @Field(() => [Producteur])
  producteur: Producteur[];

  @Field(() => [Prospection])
  prospection: Prospection[];
}
