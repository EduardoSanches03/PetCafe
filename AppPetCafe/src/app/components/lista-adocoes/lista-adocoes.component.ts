import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Adocao } from 'src/app/Model/Adocao'
import { AdocoesService } from 'src/app/Servico/AdocaoServico/adocoes.service'; 
import { EditadocaomodalComponent } from '../editadocaomodal/editadocaomodal.component';


@Component({
  selector: 'app-lista-adocoes',
  templateUrl: './lista-adocoes.component.html',
  styleUrls: ['./lista-adocoes.component.css']
})
export class ListaAdocoesComponent {

  formulario: any;
  tituloFormulario: string = '';
  adocoes: Adocao[] = [];
  modalRef!: BsModalRef;

  constructor(
    private adocoesService: AdocoesService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.obterAdocoes();
  }

  obterAdocoes(): void {
    this.adocoesService.listar().subscribe(
      (adocoes) => {
        this.adocoes = adocoes;
      },
      (error) => {
        console.error('Erro ao obter adoção', error);
        
      }
    );
  }

  removerAdocao(codigo: number): void {
    this.adocoesService.excluir(codigo).subscribe(
      () => {
        console.log('Adoção removido com sucesso!');
        this.obterAdocoes();
      },
      (error) => {
        console.error('Erro ao remover registro', error);
      }
    );
  }

  abrirModalEditAdocao(adocao: Adocao): void {
    if (adocao) {
      const initialState = { adocao: { ...adocao } };

      this.modalRef = this.modalService.show(EditadocaomodalComponent, {
        initialState,
      });

      if (this.modalRef.content?.Atualizado) {
        this.modalRef.content.Atualizado.subscribe(() => {
          this.obterAdocoes();

          this.modalRef.hide();
        });
      }
    }
  }

  formatarCpf(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }






}
