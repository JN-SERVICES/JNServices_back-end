import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
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
