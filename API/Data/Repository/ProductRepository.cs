using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repository
{
    public class ProductRepository : IProductRepository
    {
        #region Fields
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        #endregion

        #region Ctor
        public ProductRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        #endregion

        #region Methods

        public virtual async Task<ActionResult<IList<Product>>> GetAllProductsAsync()
        {
            return await _context.Products.ToListAsync();
        }

        public virtual async Task<ActionResult<Product>> GetProductByIdAsync(int Id)
        {
            return await _context.Products.FindAsync(Id);
        }

        public virtual async Task<ActionResult<ProductDto>> InsertIntoProductsAsync(Product product)
        {
            if (product == null) return null;

            //add the created on time
            product.CreatedOnUtc = DateTime.UtcNow;

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            var productDto = new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                FeaturedImageId = product.FeaturedImageId,
                ThumbnailPictures = product.ThumbnailPictures,
                Price = product.Price,
                OldPrice = product.OldPrice,
                MarkAsNew = product.MarkAsNew,
                MarkAsNewStartDateTimeUtc = product.MarkAsNewStartDateTimeUtc,
                MarkAsNewEndDateTimeUtc = product.MarkAsNewEndDateTimeUtc,
                ShowOnHomepage = product.ShowOnHomepage,
                IncludeInTopMenu = product.IncludeInTopMenu,
                Published = product.Published,

            };

            return productDto;
        }

        public virtual async Task<ActionResult<ProductDto>> UpdateProductAsync(ProductDto productDto)
        {
            if (productDto == null)
                return null;

            var product = await _context.Products.FindAsync(productDto.Id);

            if (product == null) return null;

            //add the updated time
            productDto.UpdatedOnUtc = DateTime.UtcNow;
            _mapper.Map(productDto, product);

            _context.Products.Update(product);

            //save changes in db
            await _context.SaveChangesAsync();

            return productDto;
        }

        public virtual async Task<IEnumerable<Product>> SearchProductByNameAsync(string name)
        {
            return await _context.Products
                .Where(x => EF.Functions.Like(x.Name, $"%{name}%"))
                .ToListAsync();
        }

        public virtual async Task<bool> DeleteProductAsync(int productId)
        {
            var product = await _context.Products.FindAsync(productId);

            if (product == null)
                return false;

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return true;
        }

        
        public virtual async Task<IList<Category>> GetCategoriesByProductIdAsync(int productId)
        {
            List<int> categoryIds = await _context.ProductCategoryMapping
                .Where(x => x.ProductId == productId)
                .Select(x => x.CategoryId)
                .ToListAsync();

            return await _context.Categories
                .Where(x => categoryIds.Contains(x.Id))
                .ToListAsync();
        }
        #endregion
    }
}