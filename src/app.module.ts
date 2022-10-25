import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './Categoria/categoria.module';
import { Categoria } from './Categoria/entities/categoria.entity';
import { Produto } from './Poduto/entities/Produtos.entity';
import { ProdutoModule } from './Poduto/Produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_lojaGames',
      entities: [Produto, Categoria],
      synchronize: true,
    }),
    ProdutoModule,
    CategoriaModule,
    AppModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
