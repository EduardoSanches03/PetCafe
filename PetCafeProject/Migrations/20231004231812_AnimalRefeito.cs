using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PetCafeProject.Migrations
{
    /// <inheritdoc />
    public partial class AnimalRefeito : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Adocao_Animal_Animalid",
                table: "Adocao");

            migrationBuilder.RenameColumn(
                name: "nome",
                table: "Animal",
                newName: "Nome");

            migrationBuilder.RenameColumn(
                name: "especie",
                table: "Animal",
                newName: "Especie");

            migrationBuilder.RenameColumn(
                name: "descricao",
                table: "Animal",
                newName: "Descricao");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Animal",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "Animalid",
                table: "Adocao",
                newName: "AnimalId");

            migrationBuilder.RenameIndex(
                name: "IX_Adocao_Animalid",
                table: "Adocao",
                newName: "IX_Adocao_AnimalId");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Animal",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AlterColumn<int>(
                name: "AnimalId",
                table: "Adocao",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Adocao_Animal_AnimalId",
                table: "Adocao",
                column: "AnimalId",
                principalTable: "Animal",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Adocao_Animal_AnimalId",
                table: "Adocao");

            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Animal",
                newName: "nome");

            migrationBuilder.RenameColumn(
                name: "Especie",
                table: "Animal",
                newName: "especie");

            migrationBuilder.RenameColumn(
                name: "Descricao",
                table: "Animal",
                newName: "descricao");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Animal",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "AnimalId",
                table: "Adocao",
                newName: "Animalid");

            migrationBuilder.RenameIndex(
                name: "IX_Adocao_AnimalId",
                table: "Adocao",
                newName: "IX_Adocao_Animalid");

            migrationBuilder.AlterColumn<string>(
                name: "id",
                table: "Animal",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AlterColumn<string>(
                name: "Animalid",
                table: "Adocao",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddForeignKey(
                name: "FK_Adocao_Animal_Animalid",
                table: "Adocao",
                column: "Animalid",
                principalTable: "Animal",
                principalColumn: "id");
        }
    }
}
