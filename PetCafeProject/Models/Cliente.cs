using System.ComponentModel.DataAnnotations;

namespace PetCafeProject.Models
{
    public class Cliente
    {
        [Key]
        public string? cpf { get; set; }
        public string? nome { get; set; }
        public string? email { get; set; }
        public int idade { get; set; }
    }
}