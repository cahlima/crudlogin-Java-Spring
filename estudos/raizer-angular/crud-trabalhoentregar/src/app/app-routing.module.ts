import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { InserirClienteComponent } from './cliente/inserir-cliente/inserir-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { InserirProdutoComponent } from './produtos/inserir-produto/inserir-produto.component';
import { EditarProdutoComponent } from './produtos/editar-produto/editar-produto.component';
import { ListarPedidosComponent } from './pedidos/listar-pedidos/listar-pedidos.component';
import { InserirPedidoComponent } from './pedidos/inserir-pedido/inserir-pedido.component';
import { EditarPedidoComponent } from './pedidos/editar-pedido/editar-pedido.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [


  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'    },

  {
    path:'cliente',
    redirectTo: 'cliente/listar'},

  {
    path: 'cliente/listar',
    component: ListarClienteComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,GERENTE,FUNC'}},


  {
    path: 'cliente/novo',
    component: InserirClienteComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,GERENTE,FUNC'}},

  {
    path: 'cliente/editar/:id',
    component: EditarClienteComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,GERENTE,FUNC'}},

  {
    path: 'produtos',
    redirectTo: 'produtos/listar'},

  {path: 'produtos/listar',
  component: ListarProdutosComponent,
  canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,GERENTE'} },

  {path: 'produtos/novo',
  component: InserirProdutoComponent,
  canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,GERENTE'}},  

  
  {path: 'produtos/editar/:id',
  component: EditarProdutoComponent},

  {path: 'pedidos',
  redirectTo: 'pedidos/listar'},

  {path: 'pedidos/listar',
  component: ListarPedidosComponent,
  canActivate: [AuthGuard],
  data: {
  role: 'ADMIN,GERENTE,FUNC'} },

  {path: 'pedidos/novo',
  component: InserirPedidoComponent,
  canActivate: [AuthGuard],
  data: {
  role: 'ADMIN,GERENTE,FUNC'}}, 

  {path: 'pedidos/editar/:id',
  component: EditarPedidoComponent,
  canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,GERENTE,FUNC'}},

  {
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard],
  data: {
  role: 'ADMIN,GERENTE,FUNC'
  }
  },
 
...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
