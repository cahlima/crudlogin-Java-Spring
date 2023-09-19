import { TestBed } from '@angular/core/testing';
import { InserirProdutoComponent } from './inserir-produto.component';
describe('InserirProdutoComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [InserirProdutoComponent]
        });
        fixture = TestBed.createComponent(InserirProdutoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=inserir-produto.component.spec.js.map