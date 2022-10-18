import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Body, Delete, Post, Put } from '@nestjs/common/decorators';
import { Categoria } from '../entities/categoria.entity';
import { CategoriaService } from '../services/categoria.service';

@Controller('/categoria')
export class categoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.categoriaService.findById(id);
  }
  @Get('/tipo/:tipo')
  @HttpCode(HttpStatus.OK)
  findByTipo(
    @Param('tipo')
    tipo: string,
  ): Promise<Categoria[]> {
    return this.categoriaService.findByTipo(tipo);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body()
    categoria: Categoria,
  ): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }
  @Put()
  @HttpCode(HttpStatus.OK)
  update(
    @Body()
    categoria: Categoria,
  ): Promise<Categoria> {
    return this.categoriaService.update(categoria);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.categoriaService.delete(id);
  }
}
