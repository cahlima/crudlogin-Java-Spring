import { TestBed } from '@angular/core/testing';
import { ModalClienteComponent } from './modal-cliente.component';
describe('ModalClienteComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ModalClienteComponent]
        });
        fixture = TestBed.createComponent(ModalClienteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modal-cliente.component.spec.js.map