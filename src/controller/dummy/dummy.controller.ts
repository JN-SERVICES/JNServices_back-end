import { Body, Controller, Get, Post } from '@nestjs/common';
import { Dummy } from 'src/model/dummy.entity';
import { DummyService } from 'src/service/dummy/dummy.service';

@Controller('dummy')
export class DummyController {
  constructor(private readonly dummyService: DummyService) {}

  @Post()
  async create(@Body() body: { name: string }): Promise<Dummy> {
    return this.dummyService.create(body.name);
  }

  @Get()
  async findAll(): Promise<Dummy[]> {
    return this.dummyService.findAll();
  }
}
