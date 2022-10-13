import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Body, Delete, Post, Put } from "@nestjs/common/decorators";
import { Produto } from "../entities/Produtos.entity";
import { ProdutoService } from "../services/Produto.service";



@Controller("/produto")
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.produtoService.findAll();
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(
        @Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.produtoService.findById(id);
    }
    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(
        @Param('descricao')
        descricao: string
    ): Promise<Produto[]> {
        return this.produtoService.findByDescricao(descricao);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body()
        produto: Produto
    ): Promise<Produto> {
        return this.produtoService.create(produto);
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(
        @Body()
        produto: Produto
    ): Promise<Produto> {
        return this.produtoService.update(produto);
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(
        @Param('id', ParseIntPipe)
        id: number
    ) {
        return this.produtoService.delete(id);
    }
}