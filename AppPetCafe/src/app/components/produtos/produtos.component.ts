import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Fornecedor } from 'src/app/Model/Fornecedor';
import { Produto } from 'src/app/Model/Produto';
import { FornecedoresService } from 'src/app/Servico/FornecedorServico/fornecedores.service';
import { PreloadAllModules, Router } from '@angular/router';
import { ProdutosService } from 'src/app/Servico/ProdutoServico/produtos.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  formulario_produto: any;
  tituloFormulario: string = '';
  fornecedores: Array<Fornecedor> | undefined;

  constructor(
    private produtoService: ProdutosService,
    private fornecedorService: FornecedoresService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.tituloFormulario = 'Novo Produto';
    this.fornecedorService.listar().subscribe((fornecedores) => {
      this.fornecedores = fornecedores;
      if (this.fornecedores && this.fornecedores.length > 0) {
        this.formulario_produto
          .get('cnpj')
          ?.setValue(this.fornecedores[0].cnpj);
      }
    });
    this.formulario_produto = new FormGroup({
      fornecedorCNPJ: new FormControl(null),
      nome: new FormControl(null),
      descricao: new FormControl(null),
      valor: new FormControl(null),
    });
  }

  enviarFormulario(): void {
    const produto: Produto = this.formulario_produto.value;
    console.log('Dados do produto:', produto);
    this.produtoService.cadastrar(produto).subscribe((result) => {
      alert('Produto cadastrado com sucesso.');
      this.router.navigate(['/home']);
    });
  }
}
