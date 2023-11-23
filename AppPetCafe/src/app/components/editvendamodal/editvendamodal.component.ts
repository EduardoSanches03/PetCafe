import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ClientesService } from 'src/app/Servico/ClienteServico/clientes.service';
import { Cliente } from 'src/app/Model/Cliente';
import { Venda } from 'src/app/Model/Venda';
import { Produto } from 'src/app/Model/Produto';
import { VendasService } from 'src/app/Servico/VendaServico/vendas.service';
import { ProdutosService } from 'src/app/Servico/ProdutoServico/produtos.service';


@Component({
  selector: 'app-editvendamodal',
  templateUrl: './editvendamodal.component.html',
  styleUrls: ['./editvendamodal.component.css']
})
export class EditvendamodalComponent {

  modalRef!: BsModalRef;

  venda = new Venda();
  vendaFormatada = '';
  Atualizado: Subject<void> = new Subject<void>();

  clientes: Cliente[] = [];
  produtos: Produto[] = [];

  constructor(
    private modalService: BsModalService,
    private edicaoVendaService: VendasService,
    private clienteService: ClientesService,
    private produtoService: ProdutosService
  ) {}


  ngOnInit(): void {
    this.obterClientes();
    this.obterProdutos();
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

  obterProdutos(): void {
    this.produtoService.listar().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        console.error('Erro ao obter produtos', error);
      }
    );
  }

  calcularValorTotal(): void {
    const produtoSelecionado = this.produtos?.find(p => p.codigo === this.venda.produtoCodigo);
    const quantidadeSelecionada = this.venda.quantidade;
    this.venda.valorVenda = parseFloat((quantidadeSelecionada * (produtoSelecionado ? produtoSelecionado.valor : 0)).toFixed(2));
  }



  salvarEdicaoVenda(): void {
    this.calcularValorTotal();
    this.edicaoVendaService.alterar(this.venda).subscribe(
      () => {
        this.Atualizado.next();
      },
      (error) => {
        console.log(this.venda);
        console.error('Erro ao atualizar venda', error);
      }
    );
  }

  fecharModalVenda(): void {
    this.modalService.hide();
  }
}
