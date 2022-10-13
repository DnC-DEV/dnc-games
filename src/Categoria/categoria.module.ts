import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { categoriaController } from "./controllers/categoria.controller";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./services/categoria.service";


@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [CategoriaService],
    controllers: [categoriaController],
    exports: [TypeOrmModule]
})
export class CategoriaModule { }