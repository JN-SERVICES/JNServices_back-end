import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dummy } from 'src/model/dummy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DummyService {
  constructor(
    @InjectRepository(Dummy)
    private readonly dummyRepository: Repository<Dummy>,
  ) {}

  async create(name: string): Promise<Dummy> {
    const dummy = this.dummyRepository.create({ name });
    return this.dummyRepository.save(dummy);
  }

  async findAll(): Promise<Dummy[]> {
    return this.dummyRepository.find();
  }
}
