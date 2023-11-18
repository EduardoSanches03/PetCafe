

using System.ComponentModel.DataAnnotations;

namespace PetCafeProject.Models
{

 //-----------------------------Feito pelo ChatGPT-----------------------------
 
    
    public class Fornecedor
    {
        [Key]
        public string? cnpj { get; set; }
        public string? nome { get; set; }
    }
}


