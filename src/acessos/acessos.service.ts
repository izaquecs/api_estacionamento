import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Acesso } from './acesso.entity';

@Injectable()
export class AcessosService {
  constructor(
    @InjectRepository(Acesso)
    private readonly acessosRepository: Repository<Acesso>,
  ) {}

  create(acesso: Acesso): Promise<Acesso> {
    return this.acessosRepository.save(acesso);
  }

  countEntradas(): Promise<number> {
    return this.acessosRepository.count({
      where: {
        tipoAcesso: 'entrada',
      }});
  }

  countSaidas(): Promise<number> {
    return this.acessosRepository.count({
      where: {
        tipoAcesso: 'saida',
      }
    });
  }

  countEntradasPorHora(): Promise<any[]> {
    return this.acessosRepository.query(
      'SELECT HOUR(dataHora) as hora, COUNT(*) as total FROM acesso WHERE tipoAcesso = "entrada" GROUP BY HOUR(dataHora)',
    );
  }

  countSaidasPorHora(): Promise<any[]> {
    return this.acessosRepository.query(
      'SELECT HOUR(dataHora) as hora, COUNT(*) as total FROM acesso WHERE tipoAcesso = "saida" GROUP BY HOUR(dataHora)',
    );
  }
  
}
