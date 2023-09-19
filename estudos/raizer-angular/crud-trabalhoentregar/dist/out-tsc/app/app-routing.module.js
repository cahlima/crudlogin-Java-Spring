import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { InserirClienteComponent } from './cliente/inserir-cliente/inserir-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { InserirProdutoComponent } from './produtos/inserir-produto/inserir-produto.component';
import { EditarProdutoComponent } from './produtos/editar-produto/editar-produto.component';
import { ListarPedidosComponent } from './pedidos/listar-pedidos/listar-pedidos.component';
import { InserirPedidoComponent } from './pedidos/inserir-pedido/inserir-pedido.component';
import { EditarPedidoComponent } from './pedidos/editar-pedido/editar-pedido.component';
const routes = [
    { path: '',
        redirectTo: 'cliente/listar',
        pathMatch: 'full' },
    { path: 'cliente',
        redirectTo: 'cliente/listar' },
    { path: 'cliente/listar',
        component: ListarClienteComponent },
    { path: 'cliente/novo',
        component: InserirClienteComponent },
    { path: 'cliente/editar/:id',
        component: EditarClienteComponent },
    { path: 'produtos',
        redirectTo: 'produtos/listar' },
    { path: 'produtos/listar',
        component: ListarProdutosComponent },
    { path: 'produtos/novo',
        component: InserirProdutoComponent },
    { path: 'produtos/editar/:id',
        component: EditarProdutoComponent },
    { path: 'pedidos',
        redirectTo: 'pedidos/listar' },
    { path: 'pedidos/listar',
        component: ListarPedidosComponent },
    { path: 'pedidos/novo',
        component: InserirPedidoComponent },
    { path: 'pedidos/editar/:id',
        component: EditarPedidoComponent }
];
export let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
//# sourceMappingURL=app-routing.module.js.map