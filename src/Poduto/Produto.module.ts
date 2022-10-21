import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from 'src/Categoria/categoria.module';
import { CategoriaService } from 'src/Categoria/services/categoria.service';
import { ProdutoController } from './controller/Produto.controllers';
import { Produto } from './entities/Produtos.entity';
import { ProdutoService } from './services/Produto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  providers: [ProdutoService, CategoriaService],
  controllers: [ProdutoController],
  exports: [TypeOrmModule],
})
export class ProdutoModule {}