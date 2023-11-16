import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FornecedoresService } from 'src/app/Servico/FornecedorServico/fornecedores.service'; 
import { Fornecedor } from 'src/app/Model/Fornecedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-fornecedores',
  templateUrl: './lista-fornecedores.component.html',
  styleUrls: ['./lista-fornecedores.component.css']
})
export class ListaFornecedoresComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  fornecedores : Fornecedor[]=[];
  
  constructor(private fornecedorServico : FornecedoresService, private router : Router) { }

  ngOnInit(): void {
  this.obterClientes();
  }

  enviarFormulario(): void {
  const fornecedor: Fornecedor = this.formulario.value;
  this.fornecedorServico.cadastrar(fornecedor).subscribe(result => {
  alert('Cliente inserido com sucesso.');
  this.router.navigate(["/home"]);
  })
  }
  obterClientes(): void {
    this.fornecedorServico.listar().subscribe(
      (fornecedores) => {
        this.fornecedores = fornecedores;
      },
      (error) => {
        console.error('Erro ao obter fornecedor', error);
      }
    );
  }
  
  }