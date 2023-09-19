import { TestBed } from '@angular/core/testing';
import { ListarClienteComponent } from './listar-cliente.component';
describe('ListarClienteComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ListarClienteComponent]
        });
        fixture = TestBed.createComponent(ListarClienteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=listar-cliente.component.spec.js.map