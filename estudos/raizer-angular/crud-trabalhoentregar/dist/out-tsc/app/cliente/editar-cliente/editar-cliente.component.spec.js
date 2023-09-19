import { TestBed } from '@angular/core/testing';
import { EditarClienteComponent } from './editar-cliente.component';
describe('EditarClienteComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EditarClienteComponent]
        });
        fixture = TestBed.createComponent(EditarClienteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=editar-cliente.component.spec.js.map