import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Estabelecimento } from './estabelecimento.entity';
import { EstabelecimentosService } from './estabelecimentos.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Estabelecimentos')
@Controller('estabelecimentos')
export class EstabelecimentosController {
  constructor(private readonly estabelecimentosService: EstabelecimentosService) {}

  @Get()
  findAll(): Promise<Estabelecimento[]> {
    return this.estabelecimentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Estabelecimento> {
    return this.estabelecimentosService.findOne(id);
  }

  @Post()
  create(@Body() estabelecimento: Estabelecimento): Promise<Estabelecimento> {
    return this.estabelecimentosService.create(estabelecimento);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() estabelecimento: Estabelecimento): Promise<Estabelecimento> {
    return this.estabelecimentosService.update(id, estabelecimento);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.estabelecimentosService.delete(id);
  }
}
