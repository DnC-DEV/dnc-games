import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaService } from '../../Categoria/services/categoria.service';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Produto } from '../entities/Produtos.entity';

/**
 *  indica que a classe é do tipo Service (Classe de Serviço), 
que pode ser Injetada em outras Classes através da Injeção de Dependências.
 */
@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
    private categoriaService: CategoriaService,
  ) { }
  /**
   * @disc Consulta todos os produtos do banco de dados
   * @returns todos os produtos que estão no banco de dados
   */
  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      relations: {
        categoria: true,
      },
    });
  }
  /**
   * @disc Consulta o produto por id
   * @param id Identificador para consultar o produto por id
   * @returns O produto com o id
   */
  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: {
        id,
      },
      relations: {
        categoria: true,
      },
    });
    if (!produto)
      throw new HttpException('Produto não encontrada', HttpStatus.NOT_FOUND);
    return produto;
  }
  /**
   * @disc Consulta o produto por nome
   * @param nome Identeificador para consultar o produto por nome
   * @returns O produto com o nome do identificador
   */
  async findByNome(nome: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        categoria: true,
      },
    });
  }
  /**
   * @desc Cria um novo Produto
   * @param produto Identificador para criar um novo produto
   * @returns O produto criado
   */
  async create(produto: Produto): Promise<Produto> {
    if (produto.categoria) {
      const categoria = await this.categoriaService.findById(
        produto.categoria.id,
      );

      if (!categoria)
        throw new HttpException(
          'Categoria não encontrado!',
          HttpStatus.NOT_FOUND,
        );
    }
    return await this.produtoRepository.save(produto);
  }
  /**
   * @desc Atualiza o Produto no banco de dados
   * @param produto.id Identificador para atualizar o produto
   * @returns O conteudo atualizado
   * @throws HttpExeption Caso o produto informado não seja encontrado
   */
  async update(produto: Produto): Promise<Produto> {
    const buscaProduto = await this.findById(produto.id);

    if (!buscaProduto || !produto.id)
      throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);

    if (produto.categoria) {
      const categoria = await this.categoriaService.findById(
        produto.categoria.id,
      );

      if (!categoria)
        throw new HttpException(
          'Categoria não encontrada!',
          HttpStatus.NOT_FOUND,
        );
    }
    return await this.produtoRepository.save(produto);
  }
   /**
   * @desc Apaga um Produto do banco de dados
   * @param id O identificador do Produto a ser apagado
   * @returns Conteúdo vazio
   * @throws HttpException Caso o id informado não seja encontrado
   * @example
   * delete(1); // Será apagado o produto com id = 1
   * delete(4); // Será apagado o produto com id = 4
   */
  async delete(id: number): Promise<DeleteResult> {
    const buscaProduto = await this.findById(id);

    if (!buscaProduto)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    return await this.produtoRepository.delete(id);
  }
}
