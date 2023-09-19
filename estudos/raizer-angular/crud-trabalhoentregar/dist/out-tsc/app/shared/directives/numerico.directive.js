var NumericoDirective_1;
import { __decorate } from "tslib";
import { Directive, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export let NumericoDirective = NumericoDirective_1 = class NumericoDirective {
    constructor(el) {
        this.el = el;
    }
    onKeyUp($event) {
        let valor = $event.target.value;
        valor = valor.replace(/[\D]/g, '');
        $event.target.value = valor;
        this.onChange(valor);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        this.el.nativeElement.value = value;
    }
};
__decorate([
    HostListener('keyUp', ['$event'])
], NumericoDirective.prototype, "onKeyUp", null);
NumericoDirective = NumericoDirective_1 = __decorate([
    Directive({
        selector: '[numerico]',
        providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: NumericoDirective_1,
                multi: true
            }]
    })
], NumericoDirective);
//# sourceMappingURL=numerico.directive.js.map