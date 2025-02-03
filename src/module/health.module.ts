import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HealthController } from 'src/controller';
import { Dummy } from 'src/model';

@Module({
  imports: [TerminusModule, TypeOrmModule.forFeature([Dummy])],
  controllers: [HealthController],
})
export class HealthModule {}
