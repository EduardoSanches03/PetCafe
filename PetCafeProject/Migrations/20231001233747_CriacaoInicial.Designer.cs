﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PetCafeProject.Data;

#nullable disable

namespace PetCafeProject.Migrations
{
    [DbContext(typeof(PetCafeDbContext))]
    [Migration("20231001233747_CriacaoInicial")]
    partial class CriacaoInicial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.11");

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
#pragma warning restore 612, 618
        }
    }
}
