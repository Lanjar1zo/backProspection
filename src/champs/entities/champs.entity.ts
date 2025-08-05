import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Plante_Attaque } from 'src/plante-attaque/entities/planteAttaque.entity';
import { Producteur } from 'src/producteur/entities/producteur.entity';

@ObjectType()
export class Champs {
  @Field(() => GraphQLBigInt)
  ID_Champs: bigint;

  @Field()
  culture: string;

  @Field()
  variete: string;

  @Field()
  supTotal: number;

  @Field()
  supInfecte: number;

  @Field()
  dateSemi: Date;

  @Field()
  irrigation: string;

  @Field()
  engrai: string;

  @Field()
  stadeCroissance: string;

  @Field()
  santeGle: string;

  @Field()
  nomRavageur: string;

  @Field()
  localisation: string;

  @Field(() => GraphQLBigInt)
  ID_Producteur: bigint;

  @Field(() => Producteur)
  producteur: Producteur;

  @Field(() => [Plante_Attaque])
  planteAttaque?: Plante_Attaque[];
}
