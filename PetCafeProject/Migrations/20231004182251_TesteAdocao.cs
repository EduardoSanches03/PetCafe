using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PetCafeProject.Migrations
{
    /// <inheritdoc />
    public partial class TesteAdocao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Adocao",
                columns: table => new
                {
                    Codigo = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Clientecpf = table.Column<string>(type: "TEXT", nullable: false),
                    Animalid = table.Column<string>(type: "TEXT", nullable: true),
                    Data = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Adocao", x => x.Codigo);
                    table.ForeignKey(
                        name: "FK_Adocao_Animal_Animalid",
                        column: x => x.Animalid,
                        principalTable: "Animal",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_Adocao_Cliente_Clientecpf",
                        column: x => x.Clientecpf,
                        principalTable: "Cliente",
                        principalColumn: "cpf",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Adocao_Animalid",
                table: "Adocao",
                column: "Animalid");

            migrationBuilder.CreateIndex(
                name: "IX_Adocao_Clientecpf",
                table: "Adocao",
                column: "Clientecpf");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Adocao");
        }
    }
}
