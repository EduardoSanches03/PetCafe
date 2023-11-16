using System.ComponentModel.DataAnnotations;

namespace PetCafeProject.Models
{
    public class Produto
    {
        [Key]
        public int? Codigo { get; set; }
        public string? FornecedorCNPJ { get; set;}
        public Fornecedor? Fornecedor{ get; set; }
        public string? Nome { get; set; }
        public string? Descricao { get; set; }
        public double? Valor { get; set; }

        public Produto() { }

        public Produto(string fornecedorCNPJ, Fornecedor fornecedor, string? nome, string? descricao, double? valor)
        {
            FornecedorCNPJ = FornecedorCNPJ;   
            Fornecedor = fornecedor;
            Nome = nome;
            Descricao = descricao;
            Valor = valor;
        }
    }
}
