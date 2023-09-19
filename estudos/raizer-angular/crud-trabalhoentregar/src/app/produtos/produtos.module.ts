import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosService } from './service/produtos.service';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { RouterModule, RouterLink} from '@angular/router';
import { FormsModule, NgForm} from '@angular/forms';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component'
import { NumericoDirective } from '../shared/directives/numerico.directive';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgModel } from '@angular/forms';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    ListarProdutosComponent,
    InserirProdutoComponent,
    EditarProdutoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterLink,
    NgSelectModule
  ],
  providers: [
    ProdutosService
  ]
})
export class ProdutosModule { }
