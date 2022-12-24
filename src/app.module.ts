import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './Categoria/categoria.module';
import { Categoria } from './Categoria/entities/categoria.entity';
import { Produto } from './Poduto/entities/Produtos.entity';
import { ProdutoModule } from './Poduto/Produto.module';
import { Usuario } from './Usuario/entities/usuario.entity';
import { UsuarioModule } from './Usuario/usuario.module';
import { AppController } from './app.controller';

/**
 * @desc O module são definidas as estrutudas de dados, relacionamentos e dependencias.
 * as classes entidade, service e controller devem estar registradas no module.
 */
@Module({
  imports: [
    /*TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_lojagames',
      entities: [Produto, Categoria, Usuario],
      synchronize: true,
    }), */

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: { rejectUnauthorized: false },
      synchronize: true,
      autoLoadEntities: true
    }),
    /**
     * @desc as classes CategoriaModule e ProdutoModule são modulos que gerencia os services, controllers e entities.
     *  Ela é exportada para o app.module.
     */
    ProdutoModule,
    CategoriaModule,
    AppModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [],
})

/**
 * @desc a classe AppModule é um modulo que gerencia os services, controllers e entities.
 *  Ela é chamada pelo aquivo main e tem a função de chamar outros modulos.
 */
export class AppModule { }
