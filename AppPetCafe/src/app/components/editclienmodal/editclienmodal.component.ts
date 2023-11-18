import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { Cliente } from 'src/app/Model/Cliente';
import { ClientesService } from 'src/app/Servico/ClienteServico/clientes.service';

@Component({
  selector: 'app-editclienmodal',
  templateUrl: './editclienmodal.component.html',
  styleUrls: ['./editclienmodal.component.css'],
})
export class EditclienmodalComponent {
  modalRef!: BsModalRef;

  cliente = new Cliente();
  Atualizado: Subject<void> = new Subject<void>();

  constructor(
    private modalService: BsModalService,
    private edicaoClienteService: ClientesService
  ) {}

  salvarEdicaoCliente(): void {
    this.edicaoClienteService.alterar(this.cliente).subscribe(
      () => {
        this.Atualizado.next();
      },
      (error) => {
        console.log(this.cliente);
        console.error('Erro ao atualizar cliente', error);
      }
    );
  }
  fecharModalCliente(): void {
    this.modalService.hide();
  }
}
