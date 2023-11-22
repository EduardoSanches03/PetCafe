using System.ComponentModel.DataAnnotations;

namespace PetCafeProject.Models
{
    public class Venda
    {
        [Key]
        public int Id { get; set; } 

        public string? ClienteCPF {get;set;}
        public Cliente? Cliente { get; set; }
        public int? ProdutoCodigo {get; set;}
        public Produto? Produto { get; set; }
        public int? Quantidade { get; set; }
        public double? ValorVenda { get; set; }

        public Venda()
        {
        }

        public Venda(Cliente cliente, Produto produto, int quantidade, double valorVenda)
        {
            ClienteCPF = ClienteCPF;
            ProdutoCodigo = ProdutoCodigo;
            Cliente = cliente;
            Produto = produto;
            Quantidade = quantidade;
            ValorVenda = valorVenda;
        }
    }
}
