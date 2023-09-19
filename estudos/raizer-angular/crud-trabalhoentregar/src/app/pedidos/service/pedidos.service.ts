import { Injectable } from '@angular/core';
import { Pedidos } from 'src/app/shared/models/pedidos.model';


const LS_CHAVE: string = "pedidos"

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() { }

  listarTodos(): Pedidos[] {
    const pedidos = localStorage[LS_CHAVE];

    return pedidos ? JSON.parse(pedidos) : []; 
  }

  inserir(pedido: Pedidos): void {
    const pedidos = this.listarTodos();

    pedido.id = new Date().getTime();

    pedidos.push(pedido)

    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  }

  buscarPorId(id: number): Pedidos | undefined {
    const pedidos: Pedidos[] = this.listarTodos();

    return pedidos.find(pedido => pedido.id === id);
  }

  atualizar(pedido: Pedidos): void {
    const pedidos: Pedidos[] = this.listarTodos();

    pedidos.forEach((obj, index, objs) => {
      if (pedido.id === obj.id) {
        objs[index] = pedido
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  }

  remover(id: number): void {
    let pedidos: Pedidos[] = this.listarTodos();

    pedidos = pedidos.filter(pedido => pedido.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  }
}
