using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetCafeProject.Data;
using PetCafeProject.Models;
using System.Runtime.InteropServices;

namespace PetCafeProject.Controllers;

    [ApiController]
    [Route("[Controller]")]
    public class VendaController : ControllerBase
    {
        private PetCafeDbContext _context;

        public VendaController(PetCafeDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Venda>>> Listar()
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
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar([FromBody]Venda venda)
        {
            if (_context is null) return NotFound();

            var cliente = await _context.Cliente.FirstOrDefaultAsync(c => c.cpf == venda.ClienteCPF);
            if (cliente == null) return NotFound();

            var produto = await _context.Produto.FirstOrDefaultAsync(p => p.Codigo == venda.ProdutoCodigo);
            if (produto == null) return NotFound();

            var novaVenda = new Venda
            {
                ClienteCPF = venda.ClienteCPF,
                ProdutoCodigo = venda.ProdutoCodigo,
                Quantidade = venda.Quantidade,
                ValorVenda = venda.ValorVenda
            };

            await _context.AddAsync(novaVenda);
            await _context.SaveChangesAsync();
            return Created("", novaVenda);
        }

        [HttpDelete]
        [Route("excluir/{id}")]

        public async Task<ActionResult> Excluir(int id)
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
        [Route("alterar")]
        public async Task<ActionResult> Alterar([FromBody]Venda venda)
        {
            if (_context is null) return NotFound();

            var vendaExistente = await _context.Venda.FirstOrDefaultAsync(v => v.Id == venda.Id);
            if (vendaExistente == null) return NotFound("Venda não encontrada.");

            var cliente = await _context.Cliente.FirstOrDefaultAsync(c => c.cpf == venda.ClienteCPF);
            if (cliente == null) return NotFound("Cliente não encontrado.");

            var produto = await _context.Produto.FirstOrDefaultAsync(p => p.Codigo == venda.ProdutoCodigo);
            if (produto == null) return NotFound("Produto não encontrado.");

            vendaExistente.ClienteCPF = venda.ClienteCPF;
            vendaExistente.ProdutoCodigo = venda.ProdutoCodigo;
            vendaExistente.Quantidade = venda.Quantidade;
            vendaExistente.ValorVenda = venda.ValorVenda;

            await _context.SaveChangesAsync();
            return Ok(vendaExistente);
        }
    }
