import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './service/cliente.service';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirClienteComponent } from './inserir-cliente/inserir-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { NumericoDirective } from '../shared/directives/numerico.directive';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
export const options = {};
export let ClienteModule = class ClienteModule {
};
ClienteModule = __decorate([
    NgModule({
        declarations: [
            ListarClienteComponent,
            InserirClienteComponent,
            EditarClienteComponent,
            NumericoDirective,
            ModalClienteComponent,
        ],
        imports: [
            CommonModule,
            RouterModule,
            FormsModule
        ],
        providers: [
            ClienteService
        ]
    })
], ClienteModule);
//# sourceMappingURL=cliente.module.js.map