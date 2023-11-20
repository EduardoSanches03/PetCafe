import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Animal } from 'src/app/Model/Animal';
import { AnimaisService } from 'src/app/Servico/AnimalServico/animais.service';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.css']
})
export class AnimaisComponent {
  tituloFormulario: string = '';  
  formularioAnimal: any;
  constructor(private animaisService : AnimaisService, private router : Router) { }


  ngOnInit(): void {
    this.tituloFormulario = 'Novo Animal';
    this.formularioAnimal = new FormGroup({
    nome: new FormControl(null),
    especie: new FormControl(null),
    descricao: new FormControl(null)
    })
    }

    enviarFormulario(): void {
      const animal : Animal = this.formularioAnimal.value;
      this.animaisService.cadastrar(animal).subscribe(result => {
      alert('Animal inserido com sucesso.');
      this.router.navigate(["/home"]);
      })
      }
}
