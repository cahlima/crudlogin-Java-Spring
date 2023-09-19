import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pedidos } from 'src/app/shared/models/pedidos.model';
import { PedidosService } from '../service/pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/shared/models/produtos.model';
import { ProdutosService } from 'src/app/produtos/service/produtos.service';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {

  @ViewChild("formPedido") formPedido!: NgForm;
  pedido!: Pedidos;
  produtos: Produtos [] = [];

  constructor(
    private pedidosService: PedidosService,
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.produtos = this.produtoService.listarTodos();
    let id = +this.route.snapshot.params['id'];
    const res = this.pedidosService.buscarPorId(id);

    if(res !== undefined) 
    this.pedido = res;
  else
    throw new Error("Pedido não encontrado: id = " + id);
  }

  atualizar(): void {
    if(this.formPedido.form.valid) {
      this.pedidosService.atualizar(this.pedido);
      this.router.navigate(['/pedidos'])
    }
  }

}
