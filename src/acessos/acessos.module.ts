import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acesso } from './acesso.entity';
import { AcessosController } from './acessos.controller';
import { AcessosService } from './acessos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Acesso])],
  controllers: [AcessosController],
  providers: [AcessosService],
})
export class AcessosModule {}
