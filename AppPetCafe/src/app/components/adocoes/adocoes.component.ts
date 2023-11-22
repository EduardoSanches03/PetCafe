import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { formatDate } from '@angular/common';
import { PreloadAllModules, Router } from '@angular/router';
import { Observer } from 'rxjs';
import { Animal } from 'src/app/Model/Animal';
import { Cliente } from 'src/app/Model/Cliente';
import { Adocao } from 'src/app/Model/Adocao';
import { AdocoesService } from 'src/app/Servico/AdocaoServico/adocoes.service';
import { ClientesService } from 'src/app/Servico/ClienteServico/clientes.service';
import { AnimaisService } from 'src/app/Servico/AnimalServico/animais.service';

@Component({
  selector: 'app-adocoes',
  templateUrl: './adocoes.component.html',
  styleUrls: ['./adocoes.component.css'],
})
export class AdocoesComponent implements OnInit {
  formularioAdocao: any;
  tituloFormulario: string = '';
  clientes: Array<Cliente> | undefined;
  animais: Array<Animal> | undefined;

  constructor(
    private adocaoService: AdocoesService,
    private clienteService: ClientesService,
    private animalService: AnimaisService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.tituloFormulario = 'Nova Adocao';
    
    this.clienteService.listar().subscribe((clientes) => {
      this.clientes = clientes;
      if (this.clientes && this.clientes.length > 0) {
        this.formularioAdocao.get('cpf')?.setValue(this.clientes[0].cpf);
      }
    });

    this.animalService.listar().subscribe((animais) => {
      this.animais = animais;
      if (this.animais && this.animais.length > 0) {
        this.formularioAdocao.get('id')?.setValue(this.animais[0].id);
      }
    });
    this.formularioAdocao = this.fb.group({
      clienteCPF: [null],
      animalID: [null],
      data: [null],
      hojeCheckbox: [false]
    });
  
  
  this.formularioAdocao.get('hojeCheckbox').valueChanges.subscribe((value: any) => {
    if (value) {
      const dataAtual = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');
      this.formularioAdocao.get('data').setValue(dataAtual);
    } else {
      this.formularioAdocao.get('data').setValue(null);
    }
  });
}

  enviarFormulario(): void {
    const adocao: Adocao = this.formularioAdocao.value;
    console.log('Dados da adoção:', adocao);
    this.adocaoService.cadastrar(adocao).subscribe((result) => {
      alert('Adoção registrada com sucesso.');
      this.router.navigate(['/home']);
    });
  }


}
