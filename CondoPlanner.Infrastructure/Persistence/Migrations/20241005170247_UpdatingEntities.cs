using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CondoPlanner.API.Migrations
{
    /// <inheritdoc />
    public partial class UpdatingEntities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdminCondominium");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.RenameColumn(
                name: "UnitCount",
                table: "Condominiums",
                newName: "NumberOfResidences");

            migrationBuilder.AddColumn<string>(
                name: "AdministratorId",
                table: "Condominiums",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "UnitNumber",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<string>(
                name: "FullName",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<string>(
                name: "CPF",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.CreateTable(
                name: "CondominiumResidents",
                columns: table => new
                {
                    CondominiumId = table.Column<int>(type: "INTEGER", nullable: false),
                    ResidentId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CondominiumResidents", x => new { x.CondominiumId, x.ResidentId });
                    table.ForeignKey(
                        name: "FK_CondominiumResidents_AspNetUsers_ResidentId",
                        column: x => x.ResidentId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CondominiumResidents_Condominiums_CondominiumId",
                        column: x => x.CondominiumId,
                        principalTable: "Condominiums",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Condominiums_AdministratorId",
                table: "Condominiums",
                column: "AdministratorId");

            migrationBuilder.CreateIndex(
                name: "IX_CondominiumResidents_ResidentId",
                table: "CondominiumResidents",
                column: "ResidentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Condominiums_AspNetUsers_AdministratorId",
                table: "Condominiums",
                column: "AdministratorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Condominiums_AspNetUsers_AdministratorId",
                table: "Condominiums");

            migrationBuilder.DropTable(
                name: "CondominiumResidents");

            migrationBuilder.DropIndex(
                name: "IX_Condominiums_AdministratorId",
                table: "Condominiums");

            migrationBuilder.DropColumn(
                name: "AdministratorId",
                table: "Condominiums");

            migrationBuilder.RenameColumn(
                name: "NumberOfResidences",
                table: "Condominiums",
                newName: "UnitCount");

            migrationBuilder.AlterColumn<string>(
                name: "UnitNumber",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "FullName",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CPF",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    CPF = table.Column<string>(type: "TEXT", nullable: false),
                    CondominiumId = table.Column<int>(type: "INTEGER", nullable: true),
                    Discriminator = table.Column<string>(type: "TEXT", maxLength: 5, nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    FullName = table.Column<string>(type: "TEXT", nullable: false),
                    UnitNumber = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                    table.ForeignKey(
                        name: "FK_User_Condominiums_CondominiumId",
                        column: x => x.CondominiumId,
                        principalTable: "Condominiums",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AdminCondominium",
                columns: table => new
                {
                    AdministratorsId = table.Column<string>(type: "TEXT", nullable: false),
                    ManagedCondominiumsId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdminCondominium", x => new { x.AdministratorsId, x.ManagedCondominiumsId });
                    table.ForeignKey(
                        name: "FK_AdminCondominium_Condominiums_ManagedCondominiumsId",
                        column: x => x.ManagedCondominiumsId,
                        principalTable: "Condominiums",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AdminCondominium_User_AdministratorsId",
                        column: x => x.AdministratorsId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AdminCondominium_ManagedCondominiumsId",
                table: "AdminCondominium",
                column: "ManagedCondominiumsId");

            migrationBuilder.CreateIndex(
                name: "IX_User_CondominiumId",
                table: "User",
                column: "CondominiumId");
        }
    }
}
