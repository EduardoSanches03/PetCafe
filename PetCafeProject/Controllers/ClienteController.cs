using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetCafeProject.Data;
using PetCafeProject.Models;

namespace PetCafeProject.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class ClienteController : ControllerBase
    {
        private PetCafeDbContext _context;

        public ClienteController(PetCafeDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Cliente>>> Listar()
        {
            if(_context is null) return NotFound();
            if (_context.Cliente is null)return NotFound();
            return await _context.Cliente.ToListAsync();
        }

        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Cliente cliente)
        {
            if (_context is null) return NotFound();
            if (_context.Cliente is null) return NotFound();
            await _context.AddAsync(cliente);
            await _context.SaveChangesAsync();
            return Created("",cliente);
        }
        [HttpDelete]
        [Route("excluir/{cpf}")]

        public async Task<ActionResult> Excluir(string cpf)
        {
            if (_context is null) return NotFound();
            if (_context.Cliente is null) return NotFound();
            var cpfTemp = await _context.Cliente.FindAsync(cpf);
            if(cpfTemp is null) return NotFound();
            _context.Remove(cpfTemp);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut()]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(Cliente cliente)
        {
            if (_context is null) return NotFound();
            if (_context.Cliente is null) return NotFound();
            var clienteExistente = await _context.Cliente.FindAsync(cliente.cpf);

            if (clienteExistente == null) return NotFound("Cliente n�o encontrado.");

            clienteExistente.nome = cliente.nome;
            clienteExistente.email = cliente.email;
            clienteExistente.idade = cliente.idade;
            await _context.SaveChangesAsync();

            return Ok("Cliente atualizado com sucesso.");
        }


    }
}