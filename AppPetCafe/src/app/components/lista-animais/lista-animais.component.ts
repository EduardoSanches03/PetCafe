import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Animal } from 'src/app/Model/Animal';
import { AnimaisService } from 'src/app/Servico/AnimalServico/animais.service';
import { EditanimalmodalComponent } from '../editanimalmodal/editanimalmodal.component';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  animais: Animal[] = [];
  modalRef!: BsModalRef;

  constructor(
    private animaisService: AnimaisService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.obterAnimais();
  }

  obterAnimais(): void {
    this.animaisService.listar().subscribe(
      (animais) => {
        this.animais = animais;
      },
      (error) => {
        console.error('Erro ao obter animal', error);
      }
    );
  }
  removerAnimal(id: number): void {
    this.animaisService.excluir(id).subscribe(
      () => {
        console.log('Animal removido com sucesso!');
        this.obterAnimais();
      },
      (error) => {
        console.error('Erro ao remover cliente', error);
      }
    );
  }
  abrirModalEditAnimal(animal: Animal): void {
    if (animal) {
      const initialState = { animal: { ...animal } };

      this.modalRef = this.modalService.show(EditanimalmodalComponent, {
        initialState,
      });

      if (this.modalRef.content?.Atualizado) {
        this.modalRef.content.Atualizado.subscribe(() => {
          this.obterAnimais();

          this.modalRef.hide();
        });
      }
    }
  }
}
