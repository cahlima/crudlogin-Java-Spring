import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Pedidos } from 'src/app/shared/models/pedidos.model';
export let InserirPedidoComponent = class InserirPedidoComponent {
    constructor(pedidosService, router, produtoService) {
        this.pedidosService = pedidosService;
        this.router = router;
        this.produtoService = produtoService;
        this.produto = [];
    }
    ngOnInit() {
        this.pedido = new Pedidos();
        this.produto = this.produtoService.listarTodos();
    }
    inserir() {
        if (this.formPedido.form.valid) {
            this.pedidosService.inserir(this.pedido);
            this.router.navigate(["/pedidos"]);
        }
    }
};
__decorate([
    ViewChild('formPedido')
], InserirPedidoComponent.prototype, "formPedido", void 0);
InserirPedidoComponent = __decorate([
    Component({
        selector: 'app-inserir-pedido',
        templateUrl: './inserir-pedido.component.html',
        styleUrls: ['./inserir-pedido.component.css']
    })
], InserirPedidoComponent);
//# sourceMappingURL=inserir-pedido.component.js.map