using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface IProductRepository
    {
        Task<ActionResult<ProductDto>> InsertIntoProductsAsync(Product product);
        Task<ActionResult<IList<Product>>> GetAllProductsAsync();
        Task<ActionResult<Product>> GetProductByIdAsync(int Id);
        Task<ActionResult<ProductDto>> UpdateProductAsync(ProductDto Product);
        Task<IEnumerable<Product>> SearchProductByNameAsync(string name);
        Task<bool> DeleteProductAsync(int productId);
    }
}