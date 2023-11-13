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
public async Task<ActionResult> Cadastrar(string cnpj, string nome, string descricao, double valor)
{
    if (_context is null)
        return NotFound();

    // Verificar se o fornecedor já existe no banco de dados
    var fornecedor = await _context.Fornecedor.FirstOrDefaultAsync(f => f.CNPJ == cnpj);

    if (fornecedor == null)
    {
        return NotFound("Fornecedor não encontrado.");
    }

    // Criar produto e associar ao fornecedor existente
    var produto = new Produto
    {
        Fornecedor = fornecedor,
        Nome = nome,
        Descricao = descricao,
        Valor = valor
    };

    // Adicionar e salvar no banco de dados
    await _context.AddAsync(produto);
    await _context.SaveChangesAsync();

    return Created("", produto);
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
    public async Task<ActionResult> Alterar(int codigo, string cnpj, string nome, string descricao, double valor)
    {
        if (_context is null) return NotFound();
        if (_context.Produto is null) return NotFound();

        var produtoCadastrado = await _context.Produto.FirstOrDefaultAsync(p => p.Codigo == codigo);
        if(produtoCadastrado is null) return NotFound();

        var fornecedor = await _context.Fornecedor.FirstOrDefaultAsync(f => f.CNPJ == cnpj);
        if (fornecedor is null) return NotFound();

        produtoCadastrado.Fornecedor = fornecedor;
        produtoCadastrado.Nome = nome;
        produtoCadastrado.Descricao = descricao;
        produtoCadastrado.Valor = valor;

        _context.Produto.Update(produtoCadastrado);
        await _context.SaveChangesAsync();

        return Ok();
    }

}

