import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from 'src/app/shared/models/produtos.model';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Produtos[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtos = this.listarTodos();
  }

  listarTodos(): Produtos[] {
    return this.produtosService.listarTodos();
  }

  remover($event: any, produto: Produtos): void {
    if(confirm('Deseja realmente remover o produto?')) {
      this.produtosService.remover(produto.id!);
      this.produtos = this.listarTodos();
    }
  }
}
