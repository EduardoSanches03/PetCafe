import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

export class Venda {

    id: number = 0;
    clienteCPF: string = '';
    cliente: Cliente | undefined;
    produtoCodigo: number = 0;
    protudo: Produto | undefined;
    quantidade: number = 0;
    valorVenda: number = 0;
  produto: any;
}