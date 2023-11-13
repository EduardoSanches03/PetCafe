import { Fornecedor } from "./Fornecedor";

export class Produto {
    codigo?: number;
    fornecedor: Fornecedor | undefined; // Certifique-se de que fornecedor seja do tipo Fornecedor
    nome: string = "";
    descricao: string = "";
    valor: number = 0;
  }
  