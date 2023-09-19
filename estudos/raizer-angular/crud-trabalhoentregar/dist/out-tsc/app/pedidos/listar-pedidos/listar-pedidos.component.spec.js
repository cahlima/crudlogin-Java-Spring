import { TestBed } from '@angular/core/testing';
import { ListarPedidosComponent } from './listar-pedidos.component';
describe('ListarPedidosComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ListarPedidosComponent]
        });
        fixture = TestBed.createComponent(ListarPedidosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=listar-pedidos.component.spec.js.map