import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prospecteur } from './entities/prospecteur.entity';
import { ProspecteurService } from './prospecteur.service';
import { GraphQLBigInt } from 'graphql-scalars';

@Resolver(() => Prospecteur)
export class ProspecteurResolver {
  constructor(private readonly prospecteurService: ProspecteurService) {} // eslint-disable-line no-unused-vars

  @Query(() => [Prospecteur], { name: 'prospecteurs' })
  findAll() {
    return this.prospecteurService.findAll();
  }

  @Query(() => Prospecteur, { name: 'prospecteur' })
  findOne(@Args('id', { type: () => GraphQLBigInt }) id: bigint) {
    return this.prospecteurService.findOne(id);
  }

  @Query(() => Prospecteur, { name: 'prospecteurByEmail' })
  findByEmail(@Args('email') email: string) {
    return this.prospecteurService.findByEmail(email);
  }

  @Mutation(() => Prospecteur)
  async createProspecteur(
    @Args('nomProspecteur') nomProspecteur: string,
    @Args('prenProspecteur') prenProspecteur: string,
    @Args('fonction') fonction: string,
    @Args('email') email: string,
    @Args('tel') tel: string,
    @Args('password') password: string,
  ) {
    return this.prospecteurService.create({
      nomProspecteur,
      prenProspecteur,
      fonction,
      email,
      tel,
      password,
    });
  }
}
