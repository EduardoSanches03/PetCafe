using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PetCafeProject.Migrations
{
    /// <inheritdoc />
    public partial class VendaTeste : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Venda",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Clientecpf = table.Column<string>(type: "TEXT", nullable: true),
                    Produtocodigo = table.Column<string>(type: "TEXT", nullable: true),
                    Quantidade = table.Column<int>(type: "INTEGER", nullable: false),
                    ValorVenda = table.Column<double>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Venda", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Venda_Cliente_Clientecpf",
                        column: x => x.Clientecpf,
                        principalTable: "Cliente",
                        principalColumn: "cpf");
                    table.ForeignKey(
                        name: "FK_Venda_Produto_Produtocodigo",
                        column: x => x.Produtocodigo,
                        principalTable: "Produto",
                        principalColumn: "codigo");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Venda_Clientecpf",
                table: "Venda",
                column: "Clientecpf");

            migrationBuilder.CreateIndex(
                name: "IX_Venda_Produtocodigo",
                table: "Venda",
                column: "Produtocodigo");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Venda");
        }
    }
}
