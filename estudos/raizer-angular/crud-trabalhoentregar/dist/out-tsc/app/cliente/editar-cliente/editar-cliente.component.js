import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
export let EditarClienteComponent = class EditarClienteComponent {
    constructor(clienteService, route, router) {
        this.clienteService = clienteService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        const res = this.clienteService.buscarPorId(id);
        if (res !== undefined)
            this.cliente = res;
        else
            throw new Error("Cliente não encontrado: id = " + id);
    }
    atualizar() {
        if (this.formCliente.form.valid) {
            this.clienteService.atualizar(this.cliente);
            this.router.navigate(['/cliente']);
        }
    }
};
__decorate([
    ViewChild("formCliente")
], EditarClienteComponent.prototype, "formCliente", void 0);
EditarClienteComponent = __decorate([
    Component({
        selector: 'app-editar-cliente',
        templateUrl: './editar-cliente.component.html',
        styleUrls: ['./editar-cliente.component.css']
    })
], EditarClienteComponent);
//# sourceMappingURL=editar-cliente.component.js.map