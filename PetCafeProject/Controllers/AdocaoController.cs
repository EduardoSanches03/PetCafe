﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetCafeProject.Data;
using PetCafeProject.Models;

namespace PetCafeProject.Controllers
{
    [ApiController]
    [Route("Controller")]
    public class AdocaoController : ControllerBase
    {

        private PetCafeDbContext _context;

        public AdocaoController(PetCafeDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("listarAdocoes")]
        public async Task<ActionResult<IEnumerable<Adocao>>> ListarAdocoes()
        {
            if (_context is null) return NotFound();
            if (_context.Venda is null) return NotFound();
        
            var adocoes = await _context.Adocao
                .Include(a => a.Cliente)
                .Include(a => a.Animal)
                .ToListAsync();
        
            return adocoes;
        }

        [HttpPost]
        [Route("registrarAdocao")]
        public async Task<ActionResult> RegistrarAdocao(string cpf, string animalID, string data)
        {
            if (_context is null) return NotFound();

            var cliente = await _context.Cliente.FirstOrDefaultAsync(c => c.cpf == cpf);
            if (cliente == null) return NotFound();

            var animal = await _context.Animal.FirstOrDefaultAsync(a => a.id == animalID);
            if (animal == null) return NotFound();

            var adocao = new Adocao
            {
                Cliente = cliente,
                Animal = animal,
                Data = data
            };
            
            await _context.AddAsync(adocao);
            await _context.SaveChangesAsync();
            return Created("", adocao);
        }

        [HttpDelete]
        [Route("removerRegistroAdocao/{codigo}")]

        public async Task<ActionResult> RemoverRegistroAdocao(int codigo)
        {
            if (_context is null) return NotFound();
            if(_context.Adocao == null) return NotFound();
            var codigoTemp = await _context.Adocao.FindAsync(codigo);
            if (codigoTemp == null) return NotFound();
            _context.Remove(codigoTemp);

            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        [Route("alterarRegistroAdocao/{codigo}")]
        public async Task<ActionResult> AlterarRegistroAdocao(int codigo, string cpf, string animalId, string data)
        {

            if (_context is null) return NotFound();

            var registroAdocao = await _context.Adocao.FirstOrDefaultAsync(a => a.Codigo == codigo);
            if (registroAdocao == null) return NotFound();

            var cliente = await _context.Cliente.FirstOrDefaultAsync(c => c.cpf == cpf);
            if (cliente == null) return NotFound();

            var animal = await _context.Animal.FirstOrDefaultAsync(a => a.id == animalId);
            if (animal == null) return NotFound();

            registroAdocao.Cliente = cliente;
            registroAdocao.Animal = animal;
            registroAdocao.Data = data;

            await _context.SaveChangesAsync();
            return Ok(registroAdocao);
        }
    }
}
