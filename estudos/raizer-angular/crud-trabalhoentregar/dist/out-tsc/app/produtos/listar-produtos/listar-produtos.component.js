import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let ListarProdutosComponent = class ListarProdutosComponent {
    constructor(produtosService) {
        this.produtosService = produtosService;
        this.produtos = [];
    }
    ngOnInit() {
        this.produtos = this.listarTodos();
    }
    listarTodos() {
        return this.produtosService.listarTodos();
    }
    remover($event, produto) {
        if (confirm('Deseja realmente remover o produto?')) {
            this.produtosService.remover(produto.id);
            this.produtos = this.listarTodos();
        }
    }
};
ListarProdutosComponent = __decorate([
    Component({
        selector: 'app-listar-produtos',
        templateUrl: './listar-produtos.component.html',
        styleUrls: ['./listar-produtos.component.css']
    })
], ListarProdutosComponent);
//# sourceMappingURL=listar-produtos.component.js.map