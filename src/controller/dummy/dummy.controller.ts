import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Dummy> {
    return this.dummyService.findById(id);
  }

  @Put(':id')
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { name: string },
  ): Promise<Dummy> {
    return this.dummyService.updateById(id, body.name);
  }

  @Delete(':id')
  async deleteByIdt(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.dummyService.deleteById(id);
  }
}
