import { TestBed } from '@angular/core/testing';
import { InserirPedidoComponent } from './inserir-pedido.component';
describe('InserirPedidoComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [InserirPedidoComponent]
        });
        fixture = TestBed.createComponent(InserirPedidoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=inserir-pedido.component.spec.js.map