import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from '../Categoria/categoria.module';
import { CategoriaService } from '../Categoria/services/categoria.service';
import { ProdutoController } from './controller/Produto.controllers';
import { Produto } from './entities/Produtos.entity';
import { ProdutoService } from './services/Produto.service';
import { Bcrypt } from 'src/Auth/Bcrypt/bcrypt';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProdutoService, Bcrypt],
  controllers: [ProdutoController],
  exports: [TypeOrmModule],
})
export class ProdutoModule {}