import { NgModule } from '@angular/core';
// Diretivas
import { NumericoDirective } from './directives/numerico.directive';

// Pipes
import { CpfPipe } from './pipes/cpf.pipe';
import { CommonModule } from '@angular/common';
import { ModalClienteComponent } from '../cliente/modal-cliente/modal-cliente.component';



@NgModule({
declarations: [

ModalClienteComponent,
CpfPipe
],

imports: [

    CommonModule
],

exports: [
ModalClienteComponent,
CpfPipe
]
})
export class SharedModule { }