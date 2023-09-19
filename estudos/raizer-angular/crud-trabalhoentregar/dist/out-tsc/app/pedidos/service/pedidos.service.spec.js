import { TestBed } from '@angular/core/testing';
import { PedidosService } from './pedidos.service';
describe('PedidosService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PedidosService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=pedidos.service.spec.js.map