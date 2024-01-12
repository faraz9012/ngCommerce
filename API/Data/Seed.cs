using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;
public class Seed
{
    public static async Task SeedCustomers(DataContext context)
    {
        if (await context.Customers.AnyAsync()) return;

        var customerData = await File.ReadAllTextAsync("Data/CustomerSeedData.json");

        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

        var customers = JsonSerializer.Deserialize<List<Customer>>(customerData, options);

        foreach (var customer in customers)
        {
            using var hmac = new HMACSHA512();

            customer.Username = customer.Username.ToLower();
            customer.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Admin@123"));
            customer.PasswordSalt = hmac.Key;

            context.Customers.Add(customer);
        }

        await context.SaveChangesAsync();
    }
}
