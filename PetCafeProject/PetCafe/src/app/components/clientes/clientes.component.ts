import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from 'src/app/Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  constructor(private clienteServices: ClienteService) {}
  ngOnInit(): void {
    this.tituloFormulario = 'Novo Cliente';
    this.formulario = new FormGroup({
      cpf: new FormControl(null),
      nome: new FormControl(null),
      email: new FormControl(null),
      idade: new FormControl(null),
    });
  }
  enviarFormulario(): void {
    const cliente: Cliente = this.formulario.value;
    this.clienteServices.cadastrar(cliente).subscribe((result) => {});
  }
}
