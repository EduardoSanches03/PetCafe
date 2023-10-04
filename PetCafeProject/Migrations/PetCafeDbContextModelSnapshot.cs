﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PetCafeProject.Data;

#nullable disable

namespace PetCafeProject.Migrations
{
    [DbContext(typeof(PetCafeDbContext))]
    partial class PetCafeDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.11");

            modelBuilder.Entity("PetCafeProject.Models.Adocao", b =>
                {
                    b.Property<int>("Codigo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Animalid")
                        .HasColumnType("TEXT");

                    b.Property<string>("Clientecpf")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Data")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Codigo");

                    b.HasIndex("Animalid");

                    b.HasIndex("Clientecpf");

                    b.ToTable("Adocao");
                });

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

                    b.Property<double?>("valor")
                        .HasColumnType("REAL");

                    b.HasKey("codigo");

                    b.ToTable("Produto");
                });

            modelBuilder.Entity("PetCafeProject.Models.Venda", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Clientecpf")
                        .HasColumnType("TEXT");

                    b.Property<string>("Produtocodigo")
                        .HasColumnType("TEXT");

                    b.Property<int>("Quantidade")
                        .HasColumnType("INTEGER");

                    b.Property<double>("ValorVenda")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.HasIndex("Clientecpf");

                    b.HasIndex("Produtocodigo");

                    b.ToTable("Venda");
                });

            modelBuilder.Entity("PetCafeProject.Models.Adocao", b =>
                {
                    b.HasOne("PetCafeProject.Models.Animal", "Animal")
                        .WithMany()
                        .HasForeignKey("Animalid");

                    b.HasOne("PetCafeProject.Models.Cliente", "Cliente")
                        .WithMany()
                        .HasForeignKey("Clientecpf")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Animal");

                    b.Navigation("Cliente");
                });

            modelBuilder.Entity("PetCafeProject.Models.Venda", b =>
                {
                    b.HasOne("PetCafeProject.Models.Cliente", "Cliente")
                        .WithMany()
                        .HasForeignKey("Clientecpf");

                    b.HasOne("PetCafeProject.Models.Produto", "Produto")
                        .WithMany()
                        .HasForeignKey("Produtocodigo");

                    b.Navigation("Cliente");

                    b.Navigation("Produto");
                });
#pragma warning restore 612, 618
        }
    }
}
