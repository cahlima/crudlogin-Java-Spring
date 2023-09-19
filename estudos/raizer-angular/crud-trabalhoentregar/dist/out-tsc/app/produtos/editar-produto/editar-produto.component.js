import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
export let EditarProdutoComponent = class EditarProdutoComponent {
    constructor(produtosService, route, router) {
        this.produtosService = produtosService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        const res = this.produtosService.buscarPorId(id);
        if (res !== undefined)
            this.produto = res;
        else
            throw new Error("Produto não encontrado: id = " + id);
    }
    atualizar() {
        if (this.formProduto.form.valid) {
            this.produtosService.atualizar(this.produto);
            this.router.navigate(['/produtos']);
        }
    }
};
__decorate([
    ViewChild("formProduto")
], EditarProdutoComponent.prototype, "formProduto", void 0);
EditarProdutoComponent = __decorate([
    Component({
        selector: 'app-editar-produto',
        templateUrl: './editar-produto.component.html',
        styleUrls: ['./editar-produto.component.css']
    })
], EditarProdutoComponent);
//# sourceMappingURL=editar-produto.component.js.map