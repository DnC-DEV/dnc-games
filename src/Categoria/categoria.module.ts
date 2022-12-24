import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './controllers/categoria.controller';
import { Categoria } from './entities/categoria.entity';
import { CategoriaService } from './services/categoria.service';
import { Bcrypt } from 'src/Auth/Bcrypt/bcrypt';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriaService, Bcrypt],
  controllers: [CategoriaController],
  exports: [TypeOrmModule],
})
export class CategoriaModule {}
