import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Produtos } from 'src/app/shared/models/produtos.model';
import { ProdutosService } from '../service/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.css']
})
export class InserirProdutoComponent implements OnInit {
  @ViewChild('formProduto') formProduto! : NgForm;
  produto!: Produtos;

  constructor(
    private produtosService: ProdutosService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.produto = new Produtos();
  }

  inserir(): void {
    if(this.formProduto.form.valid) {
      this.produtosService.inserir(this.produto);
      this.router.navigate(['/produtos']);
    }
  }

}
