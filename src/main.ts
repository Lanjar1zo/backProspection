import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Configuration CORS
  app.enableCors({
    //origin: ['http://localhost:3000', 'http://localhost:8100'],
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Securisation du port par la valeur par defaut
  const port = configService.get<number>('PORT', 4000);
  await app.listen(port);

  console.log(`🚀 Server running on port ${port}`);
}
bootstrap();
