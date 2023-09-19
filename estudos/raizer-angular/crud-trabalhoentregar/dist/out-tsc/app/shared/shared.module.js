import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
// Pipes
import { CpfPipe } from './pipes/cpf.pipe';
import { CommonModule } from '@angular/common';
export let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        declarations: [
            CpfPipe
        ],
        imports: [
            CommonModule
        ],
        exports: [
            CpfPipe
        ]
    })
], SharedModule);
//# sourceMappingURL=shared.module.js.map