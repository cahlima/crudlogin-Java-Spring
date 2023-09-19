import { Injectable } from '@angular/core';
import { Produtos } from 'src/app/shared/models/produtos.model';


const LS_CHAVE: string = "produto";


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  listarTodos(): Produtos[] {
    const produtos = localStorage[LS_CHAVE];
    return produtos ? JSON.parse(produtos) : [];
  }

  inserir(produto: Produtos): void {
    const produtos = this.listarTodos();
    produto.id = new Date().getTime();
    produtos.push(produto);
    localStorage[LS_CHAVE] = JSON.stringify(produtos);
  }

  buscarPorId(id: number): Produtos | undefined {
    const produtos: Produtos[] = this.listarTodos();
    return produtos.find(produto => produto.id === id);
  }

  atualizar(produto: Produtos): void {
    const produtos: Produtos[] = this.listarTodos();
    produtos.forEach((obj, index, objs) => {
      if(produto.id === obj.id) {
        objs[index] = produto
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(produtos);
  }

  remover(id: number): void {
    let produtos: Produtos[] = this.listarTodos();
    produtos = produtos.filter( produto => produto.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(produtos);
  }
}
