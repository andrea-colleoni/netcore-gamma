using HeroesAPI.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeroesAPI.Context
{
    public class HeroesDb: DbContext
    {
        public HeroesDb(DbContextOptions<HeroesDb> options)
            : base(options)
        {

        }
        public DbSet<Hero> Heroes { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Hero>()
                .HasKey(e => e.Id);
        }

    }
}
