import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../service/pedidos.service';
import { Pedidos } from 'src/app/shared/models/pedidos.model';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit {

  pedidos: Pedidos[] = [];


  constructor(private pedidosService: PedidosService){}

  ngOnInit(): void {
    this.pedidos = this.listarTodos();
  }

  listarTodos(): Pedidos[] {
    return this.pedidosService.listarTodos();
  }

  remover($event: any, pedido: Pedidos): void {
    $event.preventDefault();
    if(confirm('Deseja realmente remover o pedido?')) {
      this.pedidosService.remover(pedido.id!);
      this.pedidos = this.listarTodos();
    }
  }
}
