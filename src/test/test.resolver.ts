import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
  @Query(() => String)
  healthCheck() {
    return `API is working - ${new Date().toISOString()}`;
  }

  @Mutation(() => String)
  testMutation(@Args('input') input: string) {
    return `Received: ${input} at ${new Date().toISOString()}`;
  }
}