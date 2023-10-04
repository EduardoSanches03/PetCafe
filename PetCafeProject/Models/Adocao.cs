using System.ComponentModel.DataAnnotations;

namespace PetCafeProject.Models
{
    public class Adocao
    {
        [Key]
        public int Codigo { get; set; }
        public Cliente Cliente { get; set; }
        public Animal Animal { get; set; }
        public string Data { get; set; }
        public Adocao() { }
    
        public Adocao(Cliente cliente, Animal animal, string data)
        { 
            Cliente = cliente;
            Animal = animal;
            Data = data;
        }
    }
}
