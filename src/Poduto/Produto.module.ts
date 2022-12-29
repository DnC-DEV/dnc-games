import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from '../Categoria/categoria.module';
import { CategoriaService } from '../Categoria/services/categoria.service';
import { ProdutoController } from './controller/Produto.controllers';
import { Produto } from './entities/Produtos.entity';
import { ProdutoService } from './services/Produto.service';
import { Bcrypt } from '../Auth/Bcrypt/bcrypt';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]),CategoriaModule],
  providers: [ProdutoService, CategoriaService],
  controllers: [ProdutoController],
  exports: [TypeOrmModule],
})
export class ProdutoModule {}