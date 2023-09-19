import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let ListarPedidosComponent = class ListarPedidosComponent {
    constructor(pedidosService) {
        this.pedidosService = pedidosService;
        this.pedidos = [];
    }
    ngOnInit() {
        this.pedidos = this.listarTodos();
    }
    listarTodos() {
        return this.pedidosService.listarTodos();
    }
    remover($event, pedido) {
        $event.preventDefault();
        if (confirm('Deseja realmente remover o pedido?')) {
            this.pedidosService.remover(pedido.id);
            this.pedidos = this.listarTodos();
        }
    }
};
ListarPedidosComponent = __decorate([
    Component({
        selector: 'app-listar-pedidos',
        templateUrl: './listar-pedidos.component.html',
        styleUrls: ['./listar-pedidos.component.css']
    })
], ListarPedidosComponent);
//# sourceMappingURL=listar-pedidos.component.js.map