import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let ModalClienteComponent = class ModalClienteComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], ModalClienteComponent.prototype, "cliente", void 0);
ModalClienteComponent = __decorate([
    Component({
        selector: 'modal-cliente',
        templateUrl: './modal-cliente.component.html',
        styleUrls: ['./modal-cliente.component.css']
    })
], ModalClienteComponent);
//# sourceMappingURL=modal-cliente.component.js.map