import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Veiculo } from './veiculo.entity';
import { VeiculosService } from './veiculos.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Veiculos')
@Controller('veiculos')
export class VeiculosController {
  constructor(private readonly veiculosService: VeiculosService) {}

  @Get()
  findAll(): Promise<Veiculo[]> {
    return this.veiculosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Veiculo> {
    return this.veiculosService.findOne(id);
  }

  @Post()
  create(@Body() veiculo: Veiculo): Promise<Veiculo> {
    return this.veiculosService.create(veiculo);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() veiculo: Veiculo): Promise<Veiculo> {
    return this.veiculosService.update(id, veiculo);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.veiculosService.delete(id);
  }
}
