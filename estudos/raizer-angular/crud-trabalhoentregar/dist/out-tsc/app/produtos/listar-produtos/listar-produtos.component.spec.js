import { TestBed } from '@angular/core/testing';
import { ListarProdutosComponent } from './listar-produtos.component';
describe('ListarProdutosComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ListarProdutosComponent]
        });
        fixture = TestBed.createComponent(ListarProdutosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=listar-produtos.component.spec.js.map