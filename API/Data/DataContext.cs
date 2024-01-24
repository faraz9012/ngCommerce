using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;
public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Customer> Customers { get; set; }
    public DbSet<Picture> Pictures  { get; set; }
    public DbSet<Category> Categories  { get; set; }
    public DbSet<Product> Products  { get; set; }
}
