using Backend.Core.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.Infrastructure.Context
{
    public class EfDbContext : IdentityDbContext
    {
        public EfDbContext(DbContextOptions<EfDbContext> options) : base (options)
        {

        }

        public DbSet<User> Users { get; set; }

    }
}
