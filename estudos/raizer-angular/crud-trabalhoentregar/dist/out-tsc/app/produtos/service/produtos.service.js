import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
const LS_CHAVE = "produtos";
export let ProdutosService = class ProdutosService {
    constructor() { }
    listarTodos() {
        const produtos = localStorage[LS_CHAVE];
        return produtos ? JSON.parse(produtos) : [];
    }
    inserir(produto) {
        const produtos = this.listarTodos();
        produto.id = new Date().getTime();
        produtos.push(produto);
        localStorage[LS_CHAVE] = JSON.stringify(produtos);
    }
    buscarPorId(id) {
        const produtos = this.listarTodos();
        return produtos.find(produto => produto.id === id);
    }
    atualizar(produto) {
        const produtos = this.listarTodos();
        produtos.forEach((obj, index, objs) => {
            if (produto.id === obj.id) {
                objs[index] = produto;
            }
        });
        localStorage[LS_CHAVE] = JSON.stringify(produtos);
    }
    remover(id) {
        let produtos = this.listarTodos();
        produtos = produtos.filter(produto => produto.id !== id);
        localStorage[LS_CHAVE] = JSON.stringify(produtos);
    }
};
ProdutosService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map