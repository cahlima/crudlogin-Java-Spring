import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.model';
export let InserirClienteComponent = class InserirClienteComponent {
    constructor(clienteService, router) {
        this.clienteService = clienteService;
        this.router = router;
    }
    ngOnInit() {
        this.cliente = new Cliente();
    }
    inserir() {
        if (this.formCliente.form.valid) {
            this.clienteService.inserir(this.cliente);
            this.router.navigate(['/cliente']);
        }
    }
};
__decorate([
    ViewChild('formCliente')
], InserirClienteComponent.prototype, "formCliente", void 0);
InserirClienteComponent = __decorate([
    Component({
        selector: 'app-inserir-cliente',
        templateUrl: './inserir-cliente.component.html',
        styleUrls: ['./inserir-cliente.component.css']
    })
], InserirClienteComponent);
//# sourceMappingURL=inserir-cliente.component.js.map