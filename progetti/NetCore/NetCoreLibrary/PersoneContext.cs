using Microsoft.EntityFrameworkCore;
using NetCoreLibrary.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace NetCoreLibrary
{
    public class PersoneContext : DbContext
    {

        public PersoneContext()
        {

        }

        public PersoneContext(DbContextOptions<PersoneContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Persona> Persone { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // To protect potentially sensitive information in your connection string, 
                // you should move it out of source code. You can avoid scaffolding the connection string by using the
                // Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=(local);Database=20210317-persone;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Persona>()
                .HasKey(p => p.Email);

            modelBuilder.Entity<Persona>()
                .Property("Nome")
                .HasMaxLength(100);

            modelBuilder.Entity<Persona>()
                .Property("Cognome")
                .HasMaxLength(100);
        }
    }
}
