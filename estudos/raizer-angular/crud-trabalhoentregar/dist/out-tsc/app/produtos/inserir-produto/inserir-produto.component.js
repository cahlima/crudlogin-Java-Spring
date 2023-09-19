import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Produtos } from 'src/app/shared/models/produtos.model';
export let InserirProdutoComponent = class InserirProdutoComponent {
    constructor(produtosService, router) {
        this.produtosService = produtosService;
        this.router = router;
    }
    ngOnInit() {
        this.produto = new Produtos();
    }
    inserir() {
        if (this.formProduto.form.valid) {
            this.produtosService.inserir(this.produto);
            this.router.navigate(['/produtos']);
        }
    }
};
__decorate([
    ViewChild('formProduto')
], InserirProdutoComponent.prototype, "formProduto", void 0);
InserirProdutoComponent = __decorate([
    Component({
        selector: 'app-inserir-produto',
        templateUrl: './inserir-produto.component.html',
        styleUrls: ['./inserir-produto.component.css']
    })
], InserirProdutoComponent);
//# sourceMappingURL=inserir-produto.component.js.map