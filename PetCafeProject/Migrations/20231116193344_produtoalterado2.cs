using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PetCafeProject.Migrations
{
    /// <inheritdoc />
    public partial class produtoalterado2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Produto_Fornecedor_FornecedorCNPJ1",
                table: "Produto");

            migrationBuilder.DropIndex(
                name: "IX_Produto_FornecedorCNPJ1",
                table: "Produto");

            migrationBuilder.DropColumn(
                name: "FornecedorCNPJ1",
                table: "Produto");

            migrationBuilder.AlterColumn<string>(
                name: "FornecedorCNPJ",
                table: "Produto",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Produto_Fornecedor_FornecedorCNPJ",
                table: "Produto");

            migrationBuilder.DropIndex(
                name: "IX_Produto_FornecedorCNPJ",
                table: "Produto");

            migrationBuilder.AlterColumn<int>(
                name: "FornecedorCNPJ",
                table: "Produto",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FornecedorCNPJ1",
                table: "Produto",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Produto_FornecedorCNPJ1",
                table: "Produto",
                column: "FornecedorCNPJ1");

            migrationBuilder.AddForeignKey(
                name: "FK_Produto_Fornecedor_FornecedorCNPJ1",
                table: "Produto",
                column: "FornecedorCNPJ1",
                principalTable: "Fornecedor",
                principalColumn: "CNPJ");
        }
    }
}
