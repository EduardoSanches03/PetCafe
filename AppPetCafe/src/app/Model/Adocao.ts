import { Cliente } from './Cliente';
import { Animal } from './Animal';

export class Adocao {
  codigo: number = 0;
  clienteCPF: string = '';
  cliente: Cliente | undefined;
  animalID: number = 0;
  animal: Animal | undefined;
  data: string = '';
}
