import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Model/Produto';
import { ProdutosService } from 'src/app/Servico/ProdutoServico/produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit{

  formulario: any;
  tituloFormulario: string = '';
  produtos : Produto[]=[];

  constructor(private produtoServico : ProdutosService, private router : Router) { }

  ngOnInit(): void {
    this.obterProdutos();
    }

      obterProdutos(): void{
        this.produtoServico.listar().subscribe(
          (produtos) => {
            this.produtos = produtos;
          },
          (error) => {
            console.error('Erro ao obter produto', error);
          }
        );
      }
}
