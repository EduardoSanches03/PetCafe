import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/Servico/ClienteServico/clientes.service';
import { Cliente } from 'src/app/Model/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  formularioCliente: any;
  tituloFormulario: string = '';  
  constructor(private clientesService : ClientesService, private router : Router) { }

  ngOnInit(): void {
  this.tituloFormulario = 'Novo Cliente';
  this.formularioCliente = new FormGroup({
  cpf: new FormControl(null),
  nome: new FormControl(null),
  email: new FormControl(null),
  idade: new FormControl(null)
  })
  }

  enviarFormulario(): void {
  const cliente : Cliente = this.formularioCliente.value;
  this.clientesService.cadastrar(cliente).subscribe(result => {
  alert('Cliente inserido com sucesso.');
  this.router.navigate(["/home"]);
  })
  }
  }
