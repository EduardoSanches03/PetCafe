﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PetCafeProject.Data;

#nullable disable

namespace PetCafeProject.Migrations
{
    [DbContext(typeof(PetCafeDbContext))]
    [Migration("20231002180821_CriacaoInicial")]
    partial class CriacaoInicial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.11");

            modelBuilder.Entity("PetCafeProject.Models.Animal", b =>
                {
                    b.Property<string>("id")
                        .HasColumnType("TEXT");

                    b.Property<string>("descricao")
                        .HasColumnType("TEXT");

                    b.Property<string>("especie")
                        .HasColumnType("TEXT");

                    b.Property<string>("nome")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("Animal");
                });

            modelBuilder.Entity("PetCafeProject.Models.Cliente", b =>
                {
                    b.Property<string>("cpf")
                        .HasColumnType("TEXT");

                    b.Property<string>("email")
                        .HasColumnType("TEXT");

                    b.Property<int>("idade")
                        .HasColumnType("INTEGER");

                    b.Property<string>("nome")
                        .HasColumnType("TEXT");

                    b.HasKey("cpf");

                    b.ToTable("Cliente");
                });

            modelBuilder.Entity("PetCafeProject.Models.Produto", b =>
                {
                    b.Property<string>("codigo")
                        .HasColumnType("TEXT");

                    b.Property<string>("descricao")
                        .HasColumnType("TEXT");

                    b.Property<string>("nome")
                        .HasColumnType("TEXT");

                    b.Property<float?>("valor")
                        .HasColumnType("REAL");

                    b.HasKey("codigo");

                    b.ToTable("Produto");
                });
#pragma warning restore 612, 618
        }
    }
}