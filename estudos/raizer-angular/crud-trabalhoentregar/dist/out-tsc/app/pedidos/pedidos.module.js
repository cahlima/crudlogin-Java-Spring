import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosService } from './service/pedidos.service';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { InserirPedidoComponent } from './inserir-pedido/inserir-pedido.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { NgSelectModule } from '@ng-select/ng-select';
export const options = {};
export let PedidosModule = class PedidosModule {
};
PedidosModule = __decorate([
    NgModule({
        declarations: [
            ListarPedidosComponent,
            InserirPedidoComponent,
            EditarPedidoComponent,
        ],
        imports: [
            CommonModule,
            RouterModule,
            FormsModule,
            NgSelectModule
        ],
        providers: [
            PedidosService
        ]
    })
], PedidosModule);
//# sourceMappingURL=pedidos.module.js.map