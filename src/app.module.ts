import { Module } from '@nestjs/common';
import { HealthController } from './controller/health/health.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DummyModule } from './module/dummy/dummy.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TerminusModule,
    DummyModule,
  ],
  controllers: [HealthController, AppController],
  providers: [AppService],
})
export class AppModule {}
