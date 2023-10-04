using System.ComponentModel.DataAnnotations;

namespace PetCafeProject.Models
{
    public class Fornecedor
    {
        [Key]
        public string CNPJ { get; set; }
        public string Nome { get; set; }
    }
}
