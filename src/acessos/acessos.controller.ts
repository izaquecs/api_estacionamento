import { Controller, Get, Post, Body } from '@nestjs/common';
import { Acesso } from './acesso.entity';
import { AcessosService } from './acessos.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Acessos')
@Controller('acessos')
export class AcessosController {
  constructor(private readonly acessosService: AcessosService) {}

  @Post()
  create(@Body() acesso: Acesso): Promise<Acesso> {
    return this.acessosService.create(acesso);
  }

  @Get('entradas')
  countEntradas(): Promise<number> {
    return this.acessosService.countEntradas();
  }

  @Get('saidas')
  countSaidas(): Promise<number> {
    return this.acessosService.countSaidas();
  }

  @Get('entradas/por-hora')
  countEntradasPorHora(): Promise<any[]> {
    return this.acessosService.countEntradasPorHora();
  }

  @Get('saidas/por-hora')
  countSaidasPorHora(): Promise<any[]> {
    return this.acessosService.countSaidasPorHora();
  }
}
