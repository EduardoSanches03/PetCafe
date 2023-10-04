using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetCafeProject.Data;
using PetCafeProject.Models;

//-----------------------------Feito pelo ChatGPT-----------------------------

namespace PetCafeProject.Controllers
{
    public class FornecedorController : ControllerBase
    {
        private PetCafeDbContext _context;

        public FornecedorController(PetCafeDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Fornecedor>>> Listar()
        {
            if (_context is null) return NotFound();
            if (_context.Cliente is null) return NotFound();
            return await _context.Fornecedor.ToListAsync();
        }

        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Fornecedor fornecedor)
        {
            if (_context is null) return NotFound();
            if (_context.Cliente is null) return NotFound();
            await _context.AddAsync(fornecedor);
            await _context.SaveChangesAsync();
            return Created("", fornecedor);
        }
        [HttpDelete]
        [Route("excluir/{cnpj}")]

        public async Task<ActionResult> Excluir(string cnpj)
        {
            if (_context is null) return NotFound();
            if (_context.Cliente is null) return NotFound();
            var cnpjTemp = await _context.Fornecedor.FindAsync(cnpj);
            if (cnpjTemp is null) return NotFound();
            _context.Remove(cnpjTemp);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut()]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(Fornecedor fornecedor)
        {
            if (_context is null) return NotFound();
            if (_context.Fornecedor is null) return NotFound();
            var fornecedorExistente = await _context.Fornecedor.FindAsync(fornecedor.CNPJ);

            if (fornecedorExistente == null) return NotFound();

            fornecedorExistente.Nome = fornecedor.Nome;
            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}
