import { Component, OnInit} from '@angular/core';
import { Usuario } from 'src/app/shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent implements OnInit {

  
  @Input() usuario: Usuario = new Usuario();
  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit() {
  }
  }
