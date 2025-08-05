import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Producteur } from './entities/producteur.entity';
import { ProducteurService } from './producteur.service';
import { GraphQLBigInt } from 'graphql-scalars';

@Resolver(() => Producteur)
export class ProducteurResolver {
  constructor(private readonly producteurService: ProducteurService) {} // eslint-disable-line no-unused-vars

  @Mutation(() => Producteur)
  async createProducteur(
    @Args('ID_Producteur') ID_Producteur: bigint,
    @Args('nomProd') nomProd: string,
    @Args('cin') cin: number,
    @Args('region') region: string,
    @Args('district') district: string,
    @Args('commune') commune: string,
    @Args('fokotany') fokotany: string,
    @Args('ID_Pospecteur') ID_Prospecteur: bigint,
    @Args('partenaire', { nullable: true }) partenaire?: string,
  ) {
    return this.producteurService.create({
      ID_Producteur,
      nomProd,
      cin,
      region,
      district,
      commune,
      fokotany,
      ID_Prospecteur,
      partenaire,
    });
  }

  @Query(() => [Producteur], { name: 'producteurs' })
  findAll() {
    return this.producteurService.findAll();
  }

  @Query(() => Producteur, { name: 'producteur' })
  findOne(@Args('id', { type: () => GraphQLBigInt }) id: bigint) {
    return this.producteurService.findOne(id);
  }
}
