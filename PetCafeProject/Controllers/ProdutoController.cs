using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetCafeProject.Data;
using PetCafeProject.Models;

namespace PetCafeProject.Controllers;
[ApiController]
[Route("[controller]")]

public class ProdutoController : ControllerBase
{

    private PetCafeDbContext _dbEstoque;

    public ProdutoController(PetCafeDbContext dbEstoque)
    {
        _dbEstoque = dbEstoque;
    }

    [HttpGet]
    [Route("listar")]
    public async Task<ActionResult<IEnumerable<Produto>>> Listar()
    {
        if (_dbEstoque is null) return NotFound();
        if (_dbEstoque.Produto is null) return NotFound();
        var produtos = await _dbEstoque.Produto.ToListAsync();

        return produtos;
    }

    [HttpPost]
    [Route("Cadastrar")]
    public IActionResult Cadastrar(Produto produto)
    {
        _dbEstoque.Add(produto);
        _dbEstoque.SaveChanges();

        return Created("", produto);
    }

    [HttpDelete]
    [Route("excluir/{codigo}")]
    public async Task<ActionResult> Excluir(string codigo)
    {
        if (_dbEstoque is null) return NotFound();
        if (_dbEstoque.Produto is null) return NotFound();
        var codTemp = await _dbEstoque.Produto.FindAsync(codigo);
        if (codTemp is null) return NotFound();
        _dbEstoque.Remove(codTemp);
        await _dbEstoque.SaveChangesAsync();
        return Ok();
    }

    [HttpPut]
    [Route("alterar")]
    public async Task<IActionResult> Alterar(Produto produto)
    {
        if (_dbEstoque is null) return NotFound();
        if (_dbEstoque.Produto is null) return NotFound();

        _dbEstoque.Produto.Update(produto);
        await _dbEstoque.SaveChangesAsync();

        return Ok();
    }

}

