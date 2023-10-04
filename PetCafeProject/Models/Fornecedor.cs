using System.ComponentModel.DataAnnotations;

namespace PetCafeProject.Models
{

 //-----------------------------Feito pelo ChatGPT-----------------------------
 
    
    public class Fornecedor
    {
        [Key]
        public string CNPJ { get; set; }
        public string Nome { get; set; }
    }
}
