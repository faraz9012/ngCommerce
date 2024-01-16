using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        #region Fields
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        #endregion

        #region Ctor

        public CategoryRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        #endregion

        #region Method

        public virtual async Task<ActionResult<IList<Category>>> GetAllCategoriesAsync()
        {
            return await _context.Categories.ToListAsync();
        }

        public virtual async Task<ActionResult<Category>> GetCategoryByIdAsync(int Id)
        {
            return await _context.Categories.FindAsync(Id);
        }

        public virtual async Task<IEnumerable<Category>> SearchCategoryByNameAsync(string name)
        {
            return await _context.Categories
                .Where(x => EF.Functions.Like(x.Name, $"%{name}%"))
                .ToListAsync();
        }

        public virtual async Task<bool> CategoryAlreadyExistsAsync(string name)
        {
            return await _context.Categories.AnyAsync(x => x.Name == name.ToLower());
        }

        public virtual async Task<ActionResult<CategoryDto>> InsertIntoCategoriesAsync(Category category)
        {
            if (category == null)
                return null;

            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            var categoryDto = new CategoryDto
            {
                Name = category.Name,
                Description = category.Description,
                ParentCategoryId = category.ParentCategoryId,
                PictureId = category.PictureId,
                ShowOnHomepage = category.ShowOnHomepage,
                IncludeInTopMenu = category.IncludeInTopMenu,
                Published = category.Published,
            };

            return categoryDto;
        }

        public virtual async Task<ActionResult<CategoryDto>> UpdateCategoryAsync(CategoryDto categoryDto)
        {
            if (categoryDto == null)
                return null;

            var category = await _context.Categories.FindAsync(categoryDto.Id);

            if (category == null) return null;

            _mapper.Map(categoryDto, category);

            _context.Categories.Update(category);
            await _context.SaveChangesAsync();

            return categoryDto;
        }
        public virtual async Task<bool> DeleteCategoryAsync(int categoryId)
        {
            var category = await _context.Categories.FindAsync(categoryId);

            if (category == null)
                return false;

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return true;
        }

        #endregion
    }
}