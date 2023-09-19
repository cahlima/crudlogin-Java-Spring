import { TestBed } from '@angular/core/testing';
import { ProdutosService } from './produtos.service';
describe('ProdutosService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProdutosService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=produtos.service.spec.js.map