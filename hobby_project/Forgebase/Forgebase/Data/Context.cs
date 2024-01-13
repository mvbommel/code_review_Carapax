using Microsoft.EntityFrameworkCore;
using Forgebase.Models;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace Forgebase.Data
{
    public class Context: DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<ProjectStage> ProjectStages { get; set; }
        public DbSet<ProjectType> ProjectTypes { get; set; }
        public DbSet<SteelType> SteelTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Project>().ToTable("Project");
            modelBuilder.Entity<ProjectStage>().ToTable("ProjectStage");
            modelBuilder.Entity<ProjectType>().ToTable("ProjectType");
            modelBuilder.Entity<SteelType>().ToTable("SteelType");
            //modelBuilder.Entity<Project>()
            //    .Property(p => p.stage)
            //    .HasConversion<string>();
            //modelBuilder.Entity<Project>()
            //   .Property(p => p.steelType)
            //   .HasConversion<string>();
            //modelBuilder.Entity<Project>()
            //   .Property(p => p.type)
            //   .HasConversion<string>();
        }
    }
}
