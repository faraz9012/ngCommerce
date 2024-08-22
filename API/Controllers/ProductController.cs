using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProductController : BaseApiController
    {
        #region Fields
        private readonly IProductRepository _productRepository;
        private readonly IProductCategoryMappingRepository _productCategoryMappingRepository;

        #endregion

        #region Ctor

        public ProductController(IProductRepository productRepository, IProductCategoryMappingRepository productCategoryMappingRepository)
        {
            _productRepository = productRepository;
            _productCategoryMappingRepository = productCategoryMappingRepository;
        }

        #endregion

        #region Methods

        [HttpGet]
        public virtual async Task<ActionResult<IList<Product>>> GetAllAsync() => await _productRepository.GetAllProductsAsync();

        [HttpPost("create")]
        public virtual async Task<ActionResult<ProductDto>> Create([FromBody] CreateProductDto createProductDto)
        {
            if (createProductDto == null) return BadRequest("Something went wrong. Apologies for any inconvenience. Please review your input and try again");

            var product = new Product
            {
                Name = createProductDto.Name,
                Description = createProductDto.Description,
                FeaturedImageId = createProductDto.FeaturedImageId,
                ThumbnailPictures = createProductDto.ThumbnailPictures,
                Price = createProductDto.Price,
                OldPrice = createProductDto.OldPrice,
                MarkAsNew = createProductDto.MarkAsNew,
                MarkAsNewStartDateTimeUtc = createProductDto.MarkAsNewStartDateTimeUtc,
                MarkAsNewEndDateTimeUtc = createProductDto.MarkAsNewEndDateTimeUtc,
                ShowOnHomepage = createProductDto.ShowOnHomepage,
                IncludeInTopMenu = createProductDto.IncludeInTopMenu,
                Published = createProductDto.Published,
            };

            var newProduct = await _productRepository.InsertIntoProductsAsync(product);

            if (createProductDto.CategoryIds.Any())
            {
                foreach (var categoryId in createProductDto.CategoryIds)
                {
                    var productCategoryMapping = new ProductCategory()
                    {
                        CategoryId = categoryId,
                        ProductId = newProduct.Value.Id
                    };

                    await _productCategoryMappingRepository.AddProductCategoryMappingAsync(productCategoryMapping);
                }
            }

            return newProduct;
        }

        [HttpPut]
        public virtual async Task<ActionResult<ProductDto>> Update(ProductDto productDto)
        {
            if (productDto == null) return BadRequest("Product was not found");

            var updatedProduct = await _productRepository.UpdateProductAsync(productDto);

            if (updatedProduct == null) return BadRequest("Something went wrong, failed to update product");

            return updatedProduct;
        }

        [HttpDelete("delete-product/{productId}")]
        public virtual async Task<ActionResult> Delete(int productId)
        {
            var product = await _productRepository.GetProductByIdAsync(productId);

            if (product == null) return NotFound("product not found");

            var result = await _productRepository.DeleteProductAsync(productId);

            if (!result) return BadRequest("Failed to delete product");

            return Ok("Product successfully deleted");
        }

        #endregion
    }
}