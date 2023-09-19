import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosService } from './service/produtos.service';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { NgSelectModule } from '@ng-select/ng-select';
export let ProdutosModule = class ProdutosModule {
};
ProdutosModule = __decorate([
    NgModule({
        declarations: [
            ListarProdutosComponent,
            InserirProdutoComponent,
            EditarProdutoComponent,
        ],
        imports: [
            CommonModule,
            RouterModule,
            FormsModule,
            NgSelectModule
        ],
        providers: [
            ProdutosService
        ]
    })
], ProdutosModule);
//# sourceMappingURL=produtos.module.js.map