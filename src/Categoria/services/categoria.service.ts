import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}
  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      relations: {
        produto: true,
      },
    });
  }
  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({
      where: {
        id,
      },
      relations: {
        produto: true,
      },
    });
    if (!categoria)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );
    return categoria;
  }
  async findByTipo(tipo: string): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      where: {
        tipo: ILike(`%${tipo}%`),
      },
      relations: {
        produto: true,
      },
    });
  }
  async findByGenero(genero: string): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      where: {
        genero: ILike(`%${genero}%`),
      },
      relations: {
        produto: true,
      },
    });
  }
  /**
   * @desc Cria uma categoria do banco de dados
   * @param categoria O indetificador da categoria a ser criada
   * @returns A categoria criada
   */
  async create(categoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(categoria);
  }
  /**
   * @desc Atualiza a categoria do banco de dados
   * @param categoria O indetificador da categoria a ser atualizado
   * @returns Conteúdo atualizado
   * @throws HttpException Caso a categoria informado não seja encontrado
   */
  async update(categoria: Categoria): Promise<Categoria> {
    const buscaCategoria = await this.findById(categoria.id);

    if (!buscaCategoria || !categoria.id)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );
    return await this.categoriaRepository.save(categoria);
  }
  /**
   * @desc Apaga uma categoria do banco de dados
   * @param id O indetificador da categoria a ser apagada
   * @returns Conteúdo vazio
   * @throws HttpException Caso o id informado não seja encontrado
   * @example
   * delete(2); // Será apagado a categoria com id = 2
   * delete(5); // Será apagado a categoria com id = 5
   */
  async delete(id: number): Promise<DeleteResult> {
    const buscaCategoria = await this.findById(id);

    if (!buscaCategoria)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );
    return await this.categoriaRepository.delete(id);
  }
}
