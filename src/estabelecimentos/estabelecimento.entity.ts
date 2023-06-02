import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Estabelecimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cnpj: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;

  @Column()
  qtde_vagas_carro: number;

  @Column()
  qtde_vagas_moto: number;
}
