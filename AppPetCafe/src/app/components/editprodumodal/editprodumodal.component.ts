import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { Fornecedor } from 'src/app/Model/Fornecedor';
import { Produto } from 'src/app/Model/Produto';
import { FornecedoresService } from 'src/app/Servico/FornecedorServico/fornecedores.service';
import { ProdutosService } from 'src/app/Servico/ProdutoServico/produtos.service';

@Component({
  selector: 'app-editprodumodal',
  templateUrl: './editprodumodal.component.html',
  styleUrls: ['./editprodumodal.component.css']
})
export class EditprodumodalComponent {
  modalRef!: BsModalRef;

  produto = new Produto();
  produAtualizado: Subject<void> = new Subject<void>();

  fornecedores: Fornecedor[] = [];

  constructor(
    private modalService: BsModalService,
    private edicaoProdutoService: ProdutosService,
    private fornecedorService: FornecedoresService
  ) {}

  ngOnInit(): void {
    this.obterFornecedores();
  }

  obterFornecedores(): void {
    this.fornecedorService.listar().subscribe(
      (fornecedores) => {
        this.fornecedores = fornecedores;
      },
      (error) => {
        console.error('Erro ao obter fornecedores', error);
      }
    );
  }

  salvarEdicaoProduto(): void {
    this.edicaoProdutoService.alterar(this.produto).subscribe(
      () => {
        this.produAtualizado.next();
      },
      (error) => {
        console.log(this.produto);
        console.error('Erro ao atualizar produto', error);
      }
    );
  }
  fecharModalProduto(): void {
    this.modalService.hide();
  }
}
