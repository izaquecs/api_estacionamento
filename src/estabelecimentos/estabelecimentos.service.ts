import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estabelecimento } from './estabelecimento.entity';

@Injectable()
export class EstabelecimentosService {
  constructor(
    @InjectRepository(Estabelecimento)
    private readonly estabelecimentosRepository: Repository<Estabelecimento>,
  ) {}

  findAll(): Promise<Estabelecimento[]> {
    return this.estabelecimentosRepository.find();
  }

  findOne(id: number): Promise<Estabelecimento> {
    return this.estabelecimentosRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  create(estabelecimento: Estabelecimento): Promise<Estabelecimento> {
    return this.estabelecimentosRepository.save(estabelecimento);
  }

  async update(id: number, estabelecimento: Estabelecimento): Promise<Estabelecimento> {
    await this.estabelecimentosRepository.update(id, estabelecimento);
    return this.estabelecimentosRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.estabelecimentosRepository.delete(id);
  }
}
