import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/Servico/ClienteServico/clientes.service';
import { Cliente } from 'src/app/Model/Cliente';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditclienmodalComponent } from '../editclienmodal/editclienmodal.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  clientes: Cliente[] = [];
  modalRef!: BsModalRef;

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.obterClientes();
  }

  enviarFormulario(): void {
    const cliente: Cliente = this.formulario.value;
    this.clientesService.cadastrar(cliente).subscribe((result) => {
      alert('Cliente inserido com sucesso.');
      this.router.navigate(['/home']);
    });
  }
  obterClientes(): void {
    this.clientesService.listar().subscribe(
      (clientes) => {
        this.clientes = clientes;
      },
      (error) => {
        console.error('Erro ao obter clientes', error);
      }
    );
  }
  removerCliente(cpf: string): void {
    this.clientesService.excluir(cpf).subscribe(
      () => {
        console.log('Cliente removido com sucesso!');
        this.obterClientes();
      },
      (error) => {
        console.error('Erro ao remover cliente', error);
      }
    );
  }

  abrirModalEditCliente(cliente: Cliente): void {
    if (cliente) {
      const initialState = { cliente: { ...cliente } };

      this.modalRef = this.modalService.show(EditclienmodalComponent, {
        initialState,
      });

      if (this.modalRef.content?.Atualizado) {
        this.modalRef.content.Atualizado.subscribe(() => {
          this.obterClientes();

          this.modalRef.hide();
        });
      }
    }
  }
  formatarCpf(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
