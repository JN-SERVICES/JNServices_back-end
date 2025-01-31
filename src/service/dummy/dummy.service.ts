import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findById(id: number): Promise<Dummy> {
    const dummy = await this.dummyRepository.findOne({ where: { id } });
    if (!dummy) {
      throw new NotFoundException(`Dummy avec l'ID ${id} non trouvé`);
    }
    return dummy;
  }

  async updateById(id: number, name: string): Promise<Dummy> {
    const dummy = await this.findById(id);
    dummy.name = name;
    return this.dummyRepository.save(dummy);
  }

  async deleteById(id: number): Promise<void> {
    const result = await this.dummyRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Dummy avec l'ID ${id} non trouvé `);
    }
  }
}
