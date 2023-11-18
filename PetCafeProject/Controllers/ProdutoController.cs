using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetCafeProject.Data;
using PetCafeProject.Models;

namespace PetCafeProject.Controllers;
[ApiController]
[Route("[controller]")]

public class ProdutoController : ControllerBase
{

    private PetCafeDbContext _context;

    public ProdutoController(PetCafeDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("listar")]
    public async Task<ActionResult<IEnumerable<Produto>>> Listar()
    {
        if (_context is null) return NotFound();
        if (_context.Produto is null) return NotFound();

        var produtos = await _context.Produto
            .Include(f => f.Fornecedor)
            .ToListAsync();

        return produtos;
    }

[HttpPost]
[Route("Cadastrar")]
public async Task<ActionResult> Cadastrar(Produto produto)
{
    if (_context is null)return NotFound();

    var fornecedor = await _context.Fornecedor.FirstOrDefaultAsync(f => f.cnpj == produto.FornecedorCNPJ);
    if (fornecedor == null)return NotFound("Fornecedor não encontrado.");
    

    var novoProduto = new Produto
    {
        FornecedorCNPJ = produto.FornecedorCNPJ,
        Nome = produto.Nome,
        Descricao = produto.Descricao,
        Valor = produto.Valor
    };

    await _context.AddAsync(novoProduto);
    await _context.SaveChangesAsync(); 

    return Created("", novoProduto);
}

[HttpDelete]
    [Route("excluir/{codigo}")]
    public async Task<ActionResult> Excluir(int codigo)
    {
        if (_context is null) return NotFound();
        if (_context.Produto is null) return NotFound();

        var codTemp = await _context.Produto.FindAsync(codigo);
        if (codTemp is null) return NotFound();

        _context.Remove(codTemp);
        await _context.SaveChangesAsync();
        return Ok();
    }


    [HttpPut]
    [Route("alterar")]
    public async Task<ActionResult> Alterar([FromBody]Produto produto)
    {
        if (_context is null) return NotFound();
        if (_context.Produto is null) return NotFound();

        var produtoCadastrado = await _context.Produto.FirstOrDefaultAsync(p => p.Codigo == produto.Codigo);
        if(produtoCadastrado is null) return NotFound();

        var fornecedor = await _context.Fornecedor.FirstOrDefaultAsync(f => f.cnpj == produto.FornecedorCNPJ);
        if (fornecedor is null) return NotFound();

        produtoCadastrado.Fornecedor = fornecedor;
        produtoCadastrado.Nome = produto.Nome;
        produtoCadastrado.Descricao = produto.Descricao;
        produtoCadastrado.Valor = produto.Valor;

        await _context.SaveChangesAsync();

        return Ok();
    }

}

