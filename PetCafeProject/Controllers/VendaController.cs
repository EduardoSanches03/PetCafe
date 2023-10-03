using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetCafeProject.Data;
using PetCafeProject.Models;

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
            return await _context.Venda.ToListAsync();
        }

        [HttpPost]
        [Route("realizarVenda")]
        public async Task<ActionResult> RealizarVenda(Venda venda)
        {
            if  (_context is null) return NotFound();
            if (_context.Cliente is null) return NotFound();
            if (_context.Produto is null) return NotFound();
            await _context.AddAsync(venda);
            return Created("", venda);
        }

    }
}
