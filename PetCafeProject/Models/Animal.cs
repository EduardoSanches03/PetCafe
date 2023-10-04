using System.ComponentModel.DataAnnotations;

namespace PetCafeProject.Models
{
    public class Animal
    {
        [Key]
        public int? Id { get; set; }
        public string? Nome { get; set; }
        public string? Especie { get; set; }
        public string? Descricao { get; set; }
    }
}