using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface IPageRepository
    {
        Task<ActionResult<PageDto>> InsertIntoPagesAsync(Page page);
        Task<ActionResult<IList<Page>>> GetAllAsync();
        Task<ActionResult<Page>> GetPageByIdAsync(int id);
        Task<ActionResult<PageDto>> UpdatePageAsync(PageDto pageDto);
        Task<IEnumerable<Page>> SearchPageByNameAsync(string name);
        Task<bool> DeletePageAsync(int id);
    }
}