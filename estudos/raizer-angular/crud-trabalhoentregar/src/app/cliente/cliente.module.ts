import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './service/cliente.service';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { RouterModule, RouterLink} from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { InserirClienteComponent } from './inserir-cliente/inserir-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { NumericoDirective } from '../shared/directives/numerico.directive';
import { NgxMaskPipe, IConfig} from 'ngx-mask' ;
import { NgModel } from '@angular/forms';
import { SharedModule } from '../shared';
import { NgSelectModule } from '@ng-select/ng-select';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    ListarClienteComponent,
    InserirClienteComponent,
    EditarClienteComponent,
    NumericoDirective,
    
   

   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterLink,
    
   
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
