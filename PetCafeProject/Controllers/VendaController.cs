using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetCafeProject.Data;
using PetCafeProject.Models;
using System.Runtime.InteropServices;

namespace PetCafeProject.Controllers
{
    [ApiController]
    [Route("Controller")]
    public class VendaController : ControllerBase
    {
        private PetCafeDbContext _context;

        public VendaController(PetCafeDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("listarVendas")]
        public async Task<ActionResult<IEnumerable<Venda>>> ListarVendas()
        {
            if (_context is null) return NotFound();
            if (_context.Venda is null) return NotFound();

            var vendas = await _context.Venda
                .Include(v => v.Cliente)
                .Include(v => v.Produto)
                .Include(v => v.Produto.Fornecedor)
                .ToListAsync();

            return vendas;
        }


        [HttpPost]
        [Route("realizarVenda")]
        public async Task<ActionResult> RealizarVenda(string cpf, int produtoId, int quantidade)
        {
            if (_context is null) return NotFound();

            var cliente = await _context.Cliente.FirstOrDefaultAsync(c => c.cpf == cpf);
            if (cliente == null) return NotFound();

            var produto = await _context.Produto.FirstOrDefaultAsync(p => p.Codigo == produtoId);
            if (produto == null) return NotFound();

            var venda = new Venda
            {
                Cliente = cliente,
                Produto = produto,
                Quantidade = quantidade,
                ValorVenda = Math.Round((double)(quantidade * produto.Valor), 2)
            };

            var resultadoVenda = new
            {
                NomeCliente = cliente.nome,
                ValorCompra = Math.Round(venda.ValorVenda, 2),
                NomeProduto = produto.Nome
            };

            await _context.AddAsync(venda);
            await _context.SaveChangesAsync();

            return Ok(resultadoVenda);
              
        }

        [HttpDelete]
        [Route("cancelarVenda/{id}")]

        public async Task<ActionResult> CancelarVenda(int id)
        {
            if (_context is null) return NotFound();
            if (_context.Venda is null) return NotFound();
            var idTemp = await _context.Venda.FindAsync(id);
            if (idTemp == null) return NotFound();
            _context.Remove(idTemp);

            await _context.SaveChangesAsync();
            return Ok();    
        }

        [HttpPut]
        [Route("alterarVenda/{id}")]
        public async Task<ActionResult> AlterarVenda(int id, string cpf, int produtoId, int quantidade)
        {
            if (_context is null) return NotFound();

            var vendaExistente = await _context.Venda.FirstOrDefaultAsync(v => v.Id == id);
            if (vendaExistente == null) return NotFound("Venda não encontrada.");

            var cliente = await _context.Cliente.FirstOrDefaultAsync(c => c.cpf == cpf);
            if (cliente == null) return NotFound("Cliente não encontrado.");

            var produto = await _context.Produto.FirstOrDefaultAsync(p => p.Codigo == produtoId);
            if (produto == null) return NotFound("Produto não encontrado.");

            vendaExistente.Cliente = cliente;
            vendaExistente.Produto = produto;
            vendaExistente.Quantidade = quantidade;
            vendaExistente.ValorVenda = (double)(quantidade * produto.Valor);

            await _context.SaveChangesAsync();
            return Ok(vendaExistente);
        }
    }
}
