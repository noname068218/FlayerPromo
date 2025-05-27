using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server_api.Models;

namespace server_api.Data
{
    public class AppDbContext : DbContext

    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Review> Reviews => Set<Review>();
        public DbSet<Message> Messages => Set<Message>();
        public DbSet<AdminUser> AdminUsers => Set<AdminUser>();
        public DbSet<GalleryImage> GalleryImages => Set<GalleryImage>();
    }
}