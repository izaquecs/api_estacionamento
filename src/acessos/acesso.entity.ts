import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Estabelecimento } from '../estabelecimentos/estabelecimento.entity';
import { Veiculo } from '../veiculos/veiculo.entity';

@Entity()
export class Acesso {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Veiculo, veiculo => veiculo.id)
  veiculo: Veiculo;

  @ManyToOne(() => Estabelecimento, estabelecimento => estabelecimento.id)
  estabelecimento: Estabelecimento;

  @Column({ type: 'enum', enum: ['entrada', 'saida'] })
  tipoAcesso: 'entrada' | 'saida';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataHora: Date;
}