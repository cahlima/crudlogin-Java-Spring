import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Produtos } from 'src/app/shared/models/produtos.model';
import { ProdutosService } from '../service/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  @ViewChild("formProduto") formProduto!: NgForm;
  produto!: Produtos;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.produtosService.buscarPorId(id);
    if(res !== undefined)
      this.produto = res;
    else
      throw new Error("Produto não encontrado: id = " + id);
  }

  atualizar(): void {
    if(this.formProduto.form.valid) {
      this.produtosService.atualizar(this.produto);
      this.router.navigate(['/produtos']);
    }
  }

}
