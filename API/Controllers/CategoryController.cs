using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CategoryController : BaseApiController
    {
        #region Fields
        private readonly ICategoryRepository _categoryRepository;
        #endregion

        #region Ctor
        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        #endregion

        #region Utilities
        private async Task<bool> AlreadyExistsAsync(string name)
        {
            return await _categoryRepository.CategoryAlreadyExistsAsync(name);
        }

        #endregion

        #region Methods

        [HttpGet]
        public virtual async Task<ActionResult<IList<Category>>> GetAllAsync()
        {
            return await _categoryRepository.GetAllCategoriesAsync();
        }

        [HttpPost("create")]
        public virtual async Task<ActionResult<CategoryDto>> Create([FromBody]CategoryDto categoryDto)
        {
            if (await AlreadyExistsAsync(categoryDto.Name)) return BadRequest("A category by this name already exists");

            var category = new Category
            {
                Name = categoryDto.Name,
                Description = categoryDto.Description,
                ParentCategoryId = categoryDto.ParentCategoryId,
                PictureId = categoryDto.PictureId,
                ShowOnHomepage = categoryDto.ShowOnHomepage,
                IncludeInTopMenu = categoryDto.IncludeInTopMenu,
                Published = categoryDto.Published,
            };

            var newCategory = await _categoryRepository.InsertIntoCategoriesAsync(category);

            return newCategory;
        }

        [HttpPut]
        public virtual async Task<ActionResult<CategoryDto>> Update(CategoryDto categoryDto)
        {
            if (categoryDto == null) return BadRequest("Category was not found");

            if (await AlreadyExistsAsync(categoryDto.Name)) return BadRequest("A category by this name already exists");

            var updatedCategory = await _categoryRepository.UpdateCategoryAsync(categoryDto);

            if (updatedCategory == null) return BadRequest("Something went wrong, failed to update category");

            return updatedCategory;

        }

        [HttpDelete("delete-category/{categoryId}")]
        public virtual async Task<ActionResult> Delete(int categoryId)
        {
            var category = await _categoryRepository.GetCategoryByIdAsync(categoryId);

            if (category == null) return NotFound("category not found");

            var result = await _categoryRepository.DeleteCategoryAsync(categoryId);

            if (!result) return BadRequest("Failed to delete category");

            return Ok();
        }
        
        #endregion
    }
}