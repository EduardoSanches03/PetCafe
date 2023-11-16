import { Fornecedor } from './Fornecedor';

export class Produto {
  codigo?: number;
  fornecedorCNPJ: string = '';
  fornecedor: Fornecedor | undefined;
  nome: string = '';
  descricao: string = '';
  valor: number = 0;
}
