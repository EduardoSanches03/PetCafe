import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { Animal } from 'src/app/Model/Animal';
import { AnimaisService } from 'src/app/Servico/AnimalServico/animais.service';

@Component({
  selector: 'app-editanimalmodal',
  templateUrl: './editanimalmodal.component.html',
  styleUrls: ['./editanimalmodal.component.css']
})
export class EditanimalmodalComponent {
  modalRef!: BsModalRef;

  animal = new Animal();
  Atualizado: Subject<void> = new Subject<void>();

  constructor(
    private modalService: BsModalService,
    private edicaoAnimalService: AnimaisService
  ) {}
  salvarEdicaoAnimal(): void {
    this.edicaoAnimalService.alterar(this.animal).subscribe(
      () => {
        this.Atualizado.next();
      },
      (error) => {
        console.log(this.animal);
        console.error('Erro ao atualizar animal', error);
      }
    );
  }
  fecharModalAnimal(): void {
    this.modalService.hide();
  }
}
