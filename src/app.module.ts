import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProspectionModule } from './prospection/prospection.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProspecteurModule } from './prospecteur/prospecteur.module';
import { ProducteurService } from './producteur/producteur.service';
import { ProducteurModule } from './producteur/producteur.module';
import { ChampsResolver } from './champs/champs.resolver';
import { ChampsService } from './champs/champs.service';
import { ChampsModule } from './champs/champs.module';
import { PlanteAttaqueModule } from './plante-attaque/plante-attaque.module';
import { PartiePlanteModule } from './partie-plante/partie-plante.module';
import { SymptomeModule } from './symptome/symptome.module';
import { EchantillonModule } from './echantillon/echantillon.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLBigInt, GraphQLDateTime } from 'graphql-scalars';
import { join } from 'path';
import { readFileSync } from 'fs';
import { TestModule } from './test/test.module';
import { ConfigModule } from '@nestjs/config';

const typeDefs = readFileSync(join(process.cwd(), 'src/schema.gql'), 'utf8');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typeDefs: typeDefs,
      playground: false,
      introspection: true,
      csrfPrevention: false,

      resolvers: {
        BigInt: GraphQLBigInt,
        DateTime: GraphQLDateTime,
      },

      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },

      path: process.env.GRAPHQL_PATH || '/graphql', // variable d'evironnement
    }),

    ProspectionModule,
    PrismaModule,
    ProspecteurModule,
    ProducteurModule,
    ChampsModule,
    PlanteAttaqueModule,
    PartiePlanteModule,
    SymptomeModule,
    EchantillonModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService, ProducteurService, ChampsResolver, ChampsService],
})
export class AppModule {}
