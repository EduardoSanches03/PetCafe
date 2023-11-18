import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FornecedoresService } from 'src/app/Servico/FornecedorServico/fornecedores.service';
import { Fornecedor } from 'src/app/Model/Fornecedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css'],
})
export class FornecedorComponent implements OnInit {
  formularioFornecedor: any;
  tituloFormulario: string = '';
  constructor(
    private fornecedorService: FornecedoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Fornecedor';
    this.formularioFornecedor = new FormGroup({
      cnpj: new FormControl(null),
      nome: new FormControl(null),
    });
  }

  salvarFornecedor(): void {
    const fornecedor: Fornecedor = this.formularioFornecedor.value;
    this.fornecedorService.cadastrar(fornecedor).subscribe((result) => {
      alert('Fornecedor inserido com sucesso.');
      this.router.navigate(['/home']);
    });
  }
  
}
