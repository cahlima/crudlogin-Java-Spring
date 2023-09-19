import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
export let EditarPedidoComponent = class EditarPedidoComponent {
    constructor(pedidosService, produtoService, route, router) {
        this.pedidosService = pedidosService;
        this.produtoService = produtoService;
        this.route = route;
        this.router = router;
        this.produtos = [];
    }
    ngOnInit() {
        this.produtos = this.produtoService.listarTodos();
        let id = +this.route.snapshot.params['id'];
        const res = this.pedidosService.buscarPorId(id);
        if (res !== undefined)
            this.pedido = res;
        else
            throw new Error("Pedido não encontrado: id = " + id);
    }
    atualizar() {
        if (this.formPedido.form.valid) {
            this.pedidosService.atualizar(this.pedido);
            this.router.navigate(['/pedidos']);
        }
    }
};
__decorate([
    ViewChild("formPedido")
], EditarPedidoComponent.prototype, "formPedido", void 0);
EditarPedidoComponent = __decorate([
    Component({
        selector: 'app-editar-pedido',
        templateUrl: './editar-pedido.component.html',
        styleUrls: ['./editar-pedido.component.css']
    })
], EditarPedidoComponent);
//# sourceMappingURL=editar-pedido.component.js.map