using System.ComponentModel.DataAnnotations;

namespace PetCafeProject.Models
{
    public class Animal
    {
        [Key]
        public string? id { get; set; }
        public string? nome { get; set; }
        public string? especie { get; set; }
        public string? descricao { get; set; }
    }
}