using System.ComponentModel.DataAnnotations;

namespace PetCafeProject.Models
{
    public class Adocao
    {
        [Key]
        public int? Codigo { get; set; }
        public string? ClienteCPF{get; set;} 
        public Cliente? Cliente { get; set; }
        public int? AnimalID{get;set;}
        public Animal? Animal { get; set; }
        public string? Data { get; set; }
        public Adocao() { }
    
        public Adocao(Cliente cliente, Animal animal, string data)
        { 
            ClienteCPF = ClienteCPF;
            AnimalID = AnimalID;
            Cliente = cliente;
            Animal = animal;
            Data = data;
        }
    }
}
