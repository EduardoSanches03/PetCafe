import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Cliente } from 'src/app/Model/Cliente';
import { Produto } from 'src/app/Model/Produto';
import { ClientesService } from 'src/app/Servico/ClienteServico/clientes.service';
import { VendasService } from 'src/app/Servico/VendaServico/vendas.service';
import { ProdutosService } from 'src/app/Servico/ProdutoServico/produtos.service';
import { Venda } from 'src/app/Model/Venda';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditvendamodalComponent } from '../editvendamodal/editvendamodal.component';

@Component({
  selector: 'app-lista-vendas',
  templateUrl: './lista-vendas.component.html',
  styleUrls: ['./lista-vendas.component.css'],
})
export class ListaVendasComponent implements OnInit {
  formularioVendas: any;
  tituloFormulario: string = '';
  vendas: Venda[] = [];
  modalRef!: BsModalRef;

  constructor(
    private VendasService: VendasService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.obterVendas();
  }

  obterVendas(): void {
    this.VendasService.listar().subscribe(
      (vendas) => {
        this.vendas = vendas;
      },
      (error) => {
        console.error('Erro ao obter venda', error);
      }
    );
  }

  removerVenda(id: number): void {
    this.VendasService.excluir(id).subscribe(
      () => {
        console.log('Venda removido com sucesso!');
        this.obterVendas();
      },
      (error) => {
        console.error('Erro ao remover venda', error);
      }
    );
  }
  abrirModalEditVenda(venda: Venda): void {
    if (venda) {
      const initialState = { venda: { ...venda } };

      this.modalRef = this.modalService.show(EditvendamodalComponent, {
        initialState,
      });

      if (this.modalRef.content?.Atualizado) {
        this.modalRef.content.Atualizado.subscribe(() => {
          this.obterVendas();

          this.modalRef.hide();
        });
      }
    }
  }

  formatarCpf(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
