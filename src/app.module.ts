import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule, HealthModule } from './module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    TerminusModule,
    HealthModule,
  ],
})
export class AppModule {}
