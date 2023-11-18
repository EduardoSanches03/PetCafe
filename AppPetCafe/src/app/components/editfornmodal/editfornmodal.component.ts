import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { Fornecedor } from 'src/app/Model/Fornecedor';
import { FornecedoresService } from 'src/app/Servico/FornecedorServico/fornecedores.service';

@Component({
  selector: 'app-editfornmodal',
  templateUrl: './editfornmodal.component.html',
  styleUrls: ['./editfornmodal.component.css'],
})
export class EditfornmodalComponent {
  modalRef!: BsModalRef;

  fornecedor = new Fornecedor();
  onAtualizado: Subject<void> = new Subject<void>();

  constructor(
    private modalService: BsModalService,
    private edicaoFornecedorService: FornecedoresService
  ) {}

  salvarEdicaoFornecedor(): void {
    this.edicaoFornecedorService.alterar(this.fornecedor).subscribe(
      () => {
        this.onAtualizado.next();
      },
      (error) => {
        console.log(this.fornecedor);
        console.error('Erro ao atualizar fornecedor', error);
      }
    );
  }
  fecharModalFornecedor(): void {
    this.modalService.hide();
  }
}
