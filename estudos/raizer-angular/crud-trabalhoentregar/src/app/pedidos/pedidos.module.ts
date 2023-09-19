import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosService } from './service/pedidos.service';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { InserirPedidoComponent } from './inserir-pedido/inserir-pedido.component';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { NgForm } from '@angular/forms';
import { NgxMaskPipe, IConfig } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared';






export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarPedidosComponent,
    InserirPedidoComponent,
    EditarPedidoComponent,
  
    
    
  
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    RouterLink,
  

    ],

    providers: [
      PedidosService
    ]
})
export class PedidosModule { }
