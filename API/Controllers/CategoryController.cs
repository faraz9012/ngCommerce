using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class CategoryController : BaseApiController
    {
        private readonly DataContext _context;
        #region Fields
        #endregion

        #region Ctor
        public CategoryController(DataContext context)
        {
            _context = context;
        }
        #endregion

        #region Utilities
        private async Task<bool> CategoryAlreadyExists(string name)
        {
            return await _context.Categories.AnyAsync(x => x.Name == name.ToLower());
        }

        #endregion

        #region Methods

        [HttpPost("register")]
        public virtual async Task<ActionResult<Category>> Create(CategoryDto categoryDto)
        {
            if (await CategoryAlreadyExists(categoryDto.Name)) return BadRequest("A category by this name already exists");

            var category = new Category
            {
                Name = categoryDto.Name,
                Description = categoryDto.Description,
                ParentCategoryId = categoryDto.ParentCategoryId,
                ShowOnHomepage = categoryDto.ShowOnHomepage,
                IncludeInTopMenu = categoryDto.IncludeInTopMenu,
                Published = categoryDto.Published,
            };

            _context.Categories.Add(category);

            return category;
        }

        [HttpGet]
        public virtual async Task<ActionResult<IEnumerable<Category>>> GetAllCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        [HttpGet("{id}")]
        public virtual async Task<ActionResult<Category>> GetCategoryById(int Id)
        {
            return await _context.Categories.FindAsync(Id);
        }

        // [HttpGet("{name}")]
        // public virtual async Task<ActionResult<Customer>> GetCategoryByName(string name)
        // {
        //     return await _customerRepository.GetCustomerByUsername(name);
        // }

        #endregion
    }
}