import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Model/Produto';
import { ProdutosService } from 'src/app/Servico/ProdutoServico/produtos.service';
import { EditprodumodalComponent } from '../editprodumodal/editprodumodal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
})
export class ListaProdutosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  produtos: Produto[] = [];
  modalRef!: BsModalRef;

  constructor(
    private produtoServico: ProdutosService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.obterProdutos();
  }

  obterProdutos(): void {
    this.produtoServico.listar().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        console.error('Erro ao obter produto', error);
      }
    );
  }
  removerProduto(codigo: number | undefined): void {
    if (codigo !== undefined) {
      this.produtoServico.excluir(codigo).subscribe(
        () => {
          console.log('Produto removido com sucesso!');
          this.obterProdutos();
        },
        (error) => {
          console.error('Erro ao remover produto', error);
        }
      );
    } else {
      console.error('Código do produto é undefined.');
    }
  }
  
  abrirModalEditProduto(produto: Produto): void {
    if (produto) {
      const initialState = { produto: { ...produto } };

      this.modalRef = this.modalService.show(EditprodumodalComponent, {
        initialState,
      });

      if (this.modalRef.content?.produAtualizado) {
        this.modalRef.content.produAtualizado.subscribe(() => {
          this.obterProdutos();

          this.modalRef.hide();
        });
      }
    }
  }
  

  formatarCnpj(cnpj: string): string {
    return cnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5'
    );
  }
}
