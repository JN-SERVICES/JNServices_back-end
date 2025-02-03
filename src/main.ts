import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

function setupSwagger<T>(app: INestApplication<T>) {
  const openapiConfig = new DocumentBuilder()
    .setTitle('Jfds Api')
    .setDescription('Jfds')
    .setVersion('0.0.1')
    .addServer('http://localhost:3000')
    .addTag('Health')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, openapiConfig);
  SwaggerModule.setup('docs', app, document);
}
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      logger: ['error', 'warn', 'log', 'verbose', 'fatal'],
    });
    setupSwagger(app);
    app.enableCors();

    await app.listen(process.env.PORT ?? 3000);
    console.log(
      `🚀 Server is running on http://localhost:${process.env.PORT ?? 3000}`,
    );
  } catch (error) {
    console.error('❌ Error starting the application:', error);
    process.exit(1);
  }
}

void bootstrap();
