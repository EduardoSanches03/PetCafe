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


    [HttpPost]
    [Route("Cadastrar")]
    public IActionResult Cadastrar(Produto produto)
    {

        _dbEstoque.Add(produto);

        _dbEstoque.SaveChanges();

        Console.WriteLine("Nome: " + produto.nome);

        return Created("", produto);

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


    [HttpGet]
    [Route("buscar/{codigo}")]
    public async Task<ActionResult<Produto>> Buscar(String codigo)
    {
        var produtoTem = await _dbEstoque.Produto.FindAsync(codigo);

        if(produtoTem == null) 
        {
            return NotFound();

        }
        else
        {
            Console.WriteLine("Nome: " + produtoTem.nome);
            return produtoTem;
        }

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


}

