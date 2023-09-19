import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css']
})
export class ModalClienteComponent {

  @Input() cliente!: Cliente;

  constructor(public activeModal: NgbActiveModal){}

  ngOnInit(): void {
    
  }

}
