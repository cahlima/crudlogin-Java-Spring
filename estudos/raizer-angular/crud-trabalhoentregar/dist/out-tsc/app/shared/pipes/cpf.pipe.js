import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
export let CpfPipe = class CpfPipe {
    transform(value) {
        let valorFormatado = value + '';
        valorFormatado = valorFormatado
            .padStart(11, '0')
            .substr(0, 11)
            .replace(/[^0-9]/, '')
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        return valorFormatado;
    }
};
CpfPipe = __decorate([
    Pipe({
        name: 'cpf'
    })
], CpfPipe);
//# sourceMappingURL=cpf.pipe.js.map