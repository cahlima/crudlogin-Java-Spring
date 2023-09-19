import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
const LS_CHAVE = "pedidos";
export let PedidosService = class PedidosService {
    constructor() { }
    listarTodos() {
        const pedidos = localStorage[LS_CHAVE];
        return pedidos ? JSON.parse(pedidos) : [];
    }
    inserir(pedido) {
        const pedidos = this.listarTodos();
        pedido.id = new Date().getTime();
        pedidos.push(pedido);
        localStorage[LS_CHAVE] = JSON.stringify(pedidos);
    }
    buscarPorId(id) {
        const pedidos = this.listarTodos();
        return pedidos.find(pedido => pedido.id === id);
    }
    atualizar(pedido) {
        const pedidos = this.listarTodos();
        pedidos.forEach((obj, index, objs) => {
            if (pedido.id === obj.id) {
                objs[index] = pedido;
            }
        });
        localStorage[LS_CHAVE] = JSON.stringify(pedidos);
    }
    remover(id) {
        let pedidos = this.listarTodos();
        pedidos = pedidos.filter(pedido => pedido.id !== id);
        localStorage[LS_CHAVE] = JSON.stringify(pedidos);
    }
};
PedidosService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PedidosService);
//# sourceMappingURL=pedidos.service.js.map