import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/Servico/ClienteServico/clientes.service';
import { Cliente } from 'src/app/Model/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  clientes: Cliente[]=[];
  
  constructor(private clientesService : ClientesService, private router : Router) { }

  ngOnInit(): void {
  this.obterClientes();
  }

  enviarFormulario(): void {
  const cliente : Cliente = this.formulario.value;
  this.clientesService.cadastrar(cliente).subscribe(result => {
  alert('Cliente inserido com sucesso.');
  this.router.navigate(["/home"]);
  })
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
  }}