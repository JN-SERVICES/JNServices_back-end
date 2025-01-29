import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DummyController } from 'src/controller/dummy/dummy.controller';
import { Dummy } from 'src/model/dummy.entity';
import { DummyService } from 'src/service/dummy/dummy.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dummy])],
  controllers: [DummyController],
  providers: [DummyService],
})
export class DummyModule {}
