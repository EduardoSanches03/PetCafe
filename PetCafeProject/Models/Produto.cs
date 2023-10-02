using System.ComponentModel.DataAnnotations;

namespace PetCafeProject.Models
{
    public class Produto
    {
        [Key]
        public string? codigo { get; set; }

        public string? nome { get; set; }

        public string? descricao { get; set; }

        public float? valor { get; set; }

    }
    
}
