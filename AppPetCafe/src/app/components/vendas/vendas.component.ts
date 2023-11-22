import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Model/Cliente';
import { Produto } from 'src/app/Model/Produto';
import { ClientesService } from 'src/app/Servico/ClienteServico/clientes.service';
import { VendasService } from 'src/app/Servico/VendaServico/vendas.service';
import { ProdutosService } from 'src/app/Servico/ProdutoServico/produtos.service';
import { Venda } from 'src/app/Model/Venda';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  formularioVenda: any;
  tituloFormulario: string = '';
  clientes: Array<Cliente> | undefined;
  produtos: Array<Produto> | undefined;

  constructor(
    private vendaService: VendasService,
    private clienteService: ClientesService,
    private produtoService: ProdutosService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Venda';

    this.clienteService.listar().subscribe((clientes) => {
      this.clientes = clientes;
      if (this.clientes && this.clientes.length > 0) {
        this.formularioVenda.get('clienteCPF')?.setValue(this.clientes[0].cpf);
      }
    });

    this.produtoService.listar().subscribe((produtos) => {
      this.produtos = produtos;
      if (this.produtos && this.produtos.length > 0) {
        this.formularioVenda.get('produtoCodigo')?.setValue(this.produtos[0].codigo);
      }
    });

    this.formularioVenda = this.fb.group({
      clienteCPF: [null],
      produtoCodigo: [null],
      quantidade: [null],
      valorVenda: [null]
    });

    this.formularioVenda.get('quantidade')?.valueChanges.subscribe((value: any) => {
      const produtoSelecionado = this.produtos?.find(p => p.codigo === this.formularioVenda.get('produtoCodigo')?.value);
      const quantidadeSelecionada = value;
      const valorTotal = quantidadeSelecionada * (produtoSelecionado ? produtoSelecionado.valor : 0);
      this.formularioVenda.get('valorVenda')?.setValue(valorTotal);
    });
  }
  
  enviarFormulario(): void {
    const venda: Venda = this.formularioVenda.value;
    console.log('Dados da Venda:', venda);
    this.vendaService.cadastrar(venda).subscribe((result) => {
      alert('Venda registrada com sucesso.');
      this.router.navigate(['/home']);
    });
  }



}
