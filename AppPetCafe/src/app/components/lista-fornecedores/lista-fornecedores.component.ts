import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from 'src/app/Servico/FornecedorServico/fornecedores.service';
import { Fornecedor } from 'src/app/Model/Fornecedor';
import { Router } from '@angular/router';
import { EditfornmodalComponent } from '../editfornmodal/editfornmodal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-fornecedores',
  templateUrl: './lista-fornecedores.component.html',
  styleUrls: ['./lista-fornecedores.component.css'],
})
export class ListaFornecedoresComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  fornecedores: Fornecedor[] = [];
  modalRef!: BsModalRef;

  constructor(
    private fornecedorServico: FornecedoresService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.obterFornecedores();
  }

  obterFornecedores(): void {
    this.fornecedorServico.listar().subscribe(
      (fornecedores) => {
        this.fornecedores = fornecedores;
      },
      (error) => {
        console.error('Erro ao obter fornecedor', error);
      }
    );
  }

  removerCliente(cpf: string): void {
    this.fornecedorServico.excluir(cpf).subscribe(
      () => {
        console.log('Fornecedor removido com sucesso!');
        this.obterFornecedores();
      },
      (error) => {
        console.error('Erro ao remover fornecedor', error);
      }
    );
  }

  abrirModalEditar(fornecedor: Fornecedor): void {
    if (fornecedor) {
      const initialState = { fornecedor: { ...fornecedor } };

      this.modalRef = this.modalService.show(EditfornmodalComponent, {
        initialState,
      });

      if (this.modalRef.content?.onAtualizado) {
        this.modalRef.content.onAtualizado.subscribe(() => {
          this.obterFornecedores();

          this.modalRef.hide();
        });
      }
    }
  }
}
