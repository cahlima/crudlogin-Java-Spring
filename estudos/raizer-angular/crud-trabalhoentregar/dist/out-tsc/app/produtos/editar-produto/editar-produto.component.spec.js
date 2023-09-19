import { TestBed } from '@angular/core/testing';
import { EditarProdutoComponent } from './editar-produto.component';
describe('EditarProdutoComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EditarProdutoComponent]
        });
        fixture = TestBed.createComponent(EditarProdutoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=editar-produto.component.spec.js.map