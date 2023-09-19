import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let ListarClienteComponent = class ListarClienteComponent {
    constructor(clienteService) {
        this.clienteService = clienteService;
        this.clientes = [];
    }
    ngOnInit() {
        this.clientes = this.listarTodos();
    }
    listarTodos() {
        return this.clienteService.listarTodos();
    }
    remover($event, cliente) {
        $event.preventDefault();
        if (confirm('Deseja remover esse cliente?')) {
            this.clienteService.remover(cliente.id);
            this.clientes = this.listarTodos();
        }
    }
};
ListarClienteComponent = __decorate([
    Component({
        selector: 'app-listar-cliente',
        templateUrl: './listar-cliente.component.html',
        styleUrls: ['./listar-cliente.component.css']
    })
], ListarClienteComponent);
//# sourceMappingURL=listar-cliente.component.js.map