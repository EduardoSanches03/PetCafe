﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetCafeProject.Data;
using PetCafeProject.Models;

namespace PetCafeProject.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class AnimalController : ControllerBase
    {           
        private PetCafeDbContext _context;

        public AnimalController(PetCafeDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Animal>>> Listar()
        {
            if (_context is null) return NotFound();
            if (_context.Animal is null) return NotFound();

            return await _context.Animal.ToListAsync();
        }

        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(string nome, string especie ,string descricao)
        {
            if (_context is null) return NotFound();
            if (_context.Animal is null) return NotFound();

            var animal = new Animal
            {
                Nome = nome,
                Especie = especie,
                Descricao = descricao
            };

            await _context.AddAsync(animal);
            await _context.SaveChangesAsync();
            return Created("", animal);
        }
        [HttpDelete]
        [Route("excluir/{id}")]

        public async Task<ActionResult> Excluir(int id)
        {
            if (_context is null) return NotFound();
            if (_context.Animal is null) return NotFound();
            var idTemp = await _context.Animal.FindAsync(id);
            if (idTemp is null) return NotFound();
            _context.Remove(idTemp);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut()]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(int id, string nome, string especie, string descricao)
        {
            if (_context is null) return NotFound();
            if (_context.Animal is null) return NotFound();

            var animalExistente = await _context.Animal.FirstOrDefaultAsync(a => a.Id == id);
            if (animalExistente == null) return NotFound();

            animalExistente.Nome = nome;
            animalExistente.Especie = especie;
            animalExistente.Descricao = descricao;

            await _context.SaveChangesAsync();
            return Ok();
        }


    }

}