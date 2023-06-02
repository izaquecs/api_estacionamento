import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Veiculo } from './veiculo.entity';

@Injectable()
export class VeiculosService {
  constructor(
    @InjectRepository(Veiculo)
    private readonly veiculosRepository: Repository<Veiculo>,
  ) {}

  findAll(): Promise<Veiculo[]> {
    return this.veiculosRepository.find();
  }

  findOne(id: number): Promise<Veiculo> {
    return this.veiculosRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  create(veiculo: Veiculo): Promise<Veiculo> {
    return this.veiculosRepository.save(veiculo);
  }

  async update(id: number, veiculo: Veiculo): Promise<Veiculo> {
    await this.veiculosRepository.update(id, veiculo);
    return this.veiculosRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.veiculosRepository.delete(id);
  }
}
