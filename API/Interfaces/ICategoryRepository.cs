using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface ICategoryRepository
    {
        Task<ActionResult<CategoryDto>> InsertIntoCategoriesAsync(Category category);
        Task<ActionResult<IEnumerable<Category>>> GetAllCategoriesAsync();
        Task<ActionResult<Category>> GetCategoryByIdAsync(int Id);
        Task<IEnumerable<Category>> SearchCategoryByNameAsync(string name);
        Task<bool> CategoryAlreadyExistsAsync(string name);
        Task<bool> DeleteCategoryAsync(int categoryId);
    }
}