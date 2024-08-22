using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repository
{
    public class ProductCategoryMappingRepository : IProductCategoryMappingRepository
    {
        #region Fields 
        private readonly DataContext _context;

        #endregion

        #region Ctor

        public ProductCategoryMappingRepository(DataContext context)
        {
            _context = context;
        }

        #endregion

        #region Methods

        public virtual async Task<ActionResult<ProductCategory>> GetProductCategoryMappingAsync(int productId, int categoryId) =>
            await _context.ProductCategoryMapping.FirstOrDefaultAsync(pcm => pcm.ProductId == productId && pcm.CategoryId == categoryId);

        public virtual async Task<ActionResult<ProductCategory>> AddProductCategoryMappingAsync(ProductCategory productCategory)
        {
            if (productCategory == null) return null;
            
            _context.ProductCategoryMapping.Add(productCategory);
            await _context.SaveChangesAsync();

            return productCategory;
        }

        #endregion
    }
}