import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { VersioningType } from '@nestjs/common';
import { join } from 'path';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from 'config/swagger/swaggerConfig';

async function bootstrap() {
  const PORT = 3000;

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true
  });

  const swaggerDocument =  SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('', app, swaggerDocument);

  app.enableVersioning({
    type: VersioningType.URI,
  })

  await app.listen(PORT);
}
bootstrap();
