import { TestBed } from '@angular/core/testing';
import { EditarPedidoComponent } from './editar-pedido.component';
describe('EditarPedidoComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EditarPedidoComponent]
        });
        fixture = TestBed.createComponent(EditarPedidoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=editar-pedido.component.spec.js.map