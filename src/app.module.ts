import { Module } from '@nestjs/common';
import { HealthController } from './controller/health/health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { DummyModule } from './module/dummy/dummy.module';
import { DatabaseModule } from './module/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    TerminusModule, // Module officiel de NestJS pour gérer la santé de l'application
    DummyModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
