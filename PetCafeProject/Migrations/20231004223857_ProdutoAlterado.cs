using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PetCafeProject.Migrations
{
    /// <inheritdoc />
    public partial class ProdutoAlterado : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Venda_Produto_Produtocodigo",
                table: "Venda");

            migrationBuilder.RenameColumn(
                name: "Produtocodigo",
                table: "Venda",
                newName: "ProdutoCodigo");

            migrationBuilder.RenameIndex(
                name: "IX_Venda_Produtocodigo",
                table: "Venda",
                newName: "IX_Venda_ProdutoCodigo");

            migrationBuilder.RenameColumn(
                name: "valor",
                table: "Produto",
                newName: "Valor");

            migrationBuilder.RenameColumn(
                name: "nome",
                table: "Produto",
                newName: "Nome");

            migrationBuilder.RenameColumn(
                name: "descricao",
                table: "Produto",
                newName: "Descricao");

            migrationBuilder.RenameColumn(
                name: "codigo",
                table: "Produto",
                newName: "Codigo");

            migrationBuilder.AddColumn<string>(
                name: "FornecedorCNPJ",
                table: "Produto",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Produto_FornecedorCNPJ",
                table: "Produto",
                column: "FornecedorCNPJ");

            migrationBuilder.AddForeignKey(
                name: "FK_Produto_Fornecedor_FornecedorCNPJ",
                table: "Produto",
                column: "FornecedorCNPJ",
                principalTable: "Fornecedor",
                principalColumn: "CNPJ");

            migrationBuilder.AddForeignKey(
                name: "FK_Venda_Produto_ProdutoCodigo",
                table: "Venda",
                column: "ProdutoCodigo",
                principalTable: "Produto",
                principalColumn: "Codigo");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Produto_Fornecedor_FornecedorCNPJ",
                table: "Produto");

            migrationBuilder.DropForeignKey(
                name: "FK_Venda_Produto_ProdutoCodigo",
                table: "Venda");

            migrationBuilder.DropIndex(
                name: "IX_Produto_FornecedorCNPJ",
                table: "Produto");

            migrationBuilder.DropColumn(
                name: "FornecedorCNPJ",
                table: "Produto");

            migrationBuilder.RenameColumn(
                name: "ProdutoCodigo",
                table: "Venda",
                newName: "Produtocodigo");

            migrationBuilder.RenameIndex(
                name: "IX_Venda_ProdutoCodigo",
                table: "Venda",
                newName: "IX_Venda_Produtocodigo");

            migrationBuilder.RenameColumn(
                name: "Valor",
                table: "Produto",
                newName: "valor");

            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Produto",
                newName: "nome");

            migrationBuilder.RenameColumn(
                name: "Descricao",
                table: "Produto",
                newName: "descricao");

            migrationBuilder.RenameColumn(
                name: "Codigo",
                table: "Produto",
                newName: "codigo");

            migrationBuilder.AddForeignKey(
                name: "FK_Venda_Produto_Produtocodigo",
                table: "Venda",
                column: "Produtocodigo",
                principalTable: "Produto",
                principalColumn: "codigo");
        }
    }
}
