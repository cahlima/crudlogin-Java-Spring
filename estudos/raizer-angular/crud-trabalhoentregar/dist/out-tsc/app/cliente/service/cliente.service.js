import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
const LS_CHAVE = "clientes";
export let ClienteService = class ClienteService {
    constructor() { }
    listarTodos() {
        const clientes = localStorage[LS_CHAVE];
        return clientes ? JSON.parse(clientes) : [];
    }
    inserir(cliente) {
        const clientes = this.listarTodos();
        cliente.id = new Date().getTime();
        clientes.push(cliente);
        localStorage[LS_CHAVE] = JSON.stringify(clientes);
    }
    buscarPorId(id) {
        const clientes = this.listarTodos();
        return clientes.find(cliente => cliente.id === id);
    }
    atualizar(cliente) {
        const clientes = this.listarTodos();
        clientes.forEach((obj, index, objs) => {
            if (cliente.id === obj.id) {
                objs[index] = cliente;
            }
        });
        localStorage[LS_CHAVE] = JSON.stringify(clientes);
    }
    remover(id) {
        let clientes = this.listarTodos();
        clientes = clientes.filter(cliente => cliente.id !== id);
        localStorage[LS_CHAVE] = JSON.stringify(clientes);
    }
};
ClienteService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ClienteService);
//# sourceMappingURL=cliente.service.js.map