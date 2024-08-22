using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface IProductCategoryMappingRepository
    {
        Task<ActionResult<ProductCategory>> GetProductCategoryMappingAsync(int productId, int categoryId);
        Task<ActionResult<ProductCategory>> AddProductCategoryMappingAsync(ProductCategory productCategory);
    }
}