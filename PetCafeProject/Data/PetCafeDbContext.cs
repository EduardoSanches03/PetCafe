using Microsoft.EntityFrameworkCore;
using PetCafeProject.Models;


namespace PetCafeProject.Data
{
    public class PetCafeDbContext : DbContext
    {
        public DbSet<Cliente>? Cliente { get; set; }
        public DbSet<Produto>? Produto { get; set; }
        public DbSet<Animal>? Animal { get; set; }
        public DbSet<Venda> Venda { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("DataSource=petCafe.db;Cache=Shared");
        }
    }
}
