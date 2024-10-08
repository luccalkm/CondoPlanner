﻿using CondoPlanner.API.Infrastructure.Identity;
using CondoPlanner.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CondoPlanner.API.Infrastructure
{
    public class AppDbContext : IdentityDbContext<AppUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        
        public DbSet<Condominium> Condominiums { get; set; }
        public DbSet<CommonArea> CommonAreas { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Condominium>()
                .HasMany(c => c.Administrators)
                .WithMany(a => a.ManagedCondominiums);
        }
    }
}
