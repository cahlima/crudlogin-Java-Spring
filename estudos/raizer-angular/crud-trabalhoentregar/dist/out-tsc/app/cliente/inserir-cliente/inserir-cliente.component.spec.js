import { TestBed } from '@angular/core/testing';
import { InserirClienteComponent } from './inserir-cliente.component';
describe('InserirClienteComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [InserirClienteComponent]
        });
        fixture = TestBed.createComponent(InserirClienteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=inserir-cliente.component.spec.js.map