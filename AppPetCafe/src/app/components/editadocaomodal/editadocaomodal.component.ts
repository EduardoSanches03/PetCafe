import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { Animal } from 'src/app/Model/Animal';
import { Cliente } from 'src/app/Model/Cliente';
import { Adocao } from 'src/app/Model/Adocao';
import { AdocoesService } from 'src/app/Servico/AdocaoServico/adocoes.service';
import { ClientesService } from 'src/app/Servico/ClienteServico/clientes.service';
import { AnimaisService } from 'src/app/Servico/AnimalServico/animais.service';




@Component({
  selector: 'app-editadocaomodal',
  templateUrl: './editadocaomodal.component.html',
  styleUrls: ['./editadocaomodal.component.css']
})
export class EditadocaomodalComponent {
  modalRef!: BsModalRef;

  adocao = new Adocao();
  Atualizado: Subject<void> = new Subject<void>();

  clientes: Cliente[] = [];
  animais: Animal[] = [];

  constructor(
    private modalService: BsModalService,
    private edicaoAdocaoService: AdocoesService,
    private clienteService: ClientesService,
    private animalService: AnimaisService
  ) {}

  ngOnInit(): void {
    this.obterClientes();
    this.obterAnimais();
  }
  obterClientes(): void {
    this.clienteService.listar().subscribe(
      (clientes) => {
        this.clientes = clientes;
      },
      (error) => {
        console.error('Erro ao obter clientes', error);
      }
    );
  }
  obterAnimais(): void {
    this.animalService.listar().subscribe(
      (animais) => {
        this.animais = animais;
      },
      (error) => {
        console.error('Erro ao obter animais', error);
      }
    );
  }
  salvarEdicaoAdocao(): void {
    this.edicaoAdocaoService.alterar(this.adocao).subscribe(
      () => {
        this.Atualizado.next();
      },
      (error) => {
        console.log(this.adocao);
        console.error('Erro ao atualizar adocao', error);
      }
    );
  }
  fecharModalAdocao(): void {
    this.modalService.hide();
  }

}
