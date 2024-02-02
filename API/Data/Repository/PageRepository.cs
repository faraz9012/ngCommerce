using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class PageRepository : IPageRepository
    {
        #region Fields
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        #endregion

        #region Ctor
        public PageRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        #endregion

        #region Method

        public virtual async Task<bool> DeletePageAsync(int id)
        {
            var page = await _context.Pages.FindAsync(id);

            if (page == null)
                return false;

            _context.Pages.Remove(page);
            await _context.SaveChangesAsync();

            return true;
        }

        public virtual async Task<ActionResult<IList<Page>>> GetAllAsync()
        {
            return await _context.Pages.ToListAsync();
        }

        public virtual async Task<ActionResult<Page>> GetPageByIdAsync(int Id)
        {
            return await _context.Pages.FindAsync(Id);
        }

        public virtual async Task<ActionResult<PageDto>> InsertIntoPagesAsync(Page page)
        {
            if (page == null)
                return null;
                
            //add the created on time
            page.CreatedOnUtc = DateTime.UtcNow;

            _context.Pages.Add(page);
            await _context.SaveChangesAsync();

            var pageDto = new PageDto
            {
                Id = page.Id,
                CustomerId = page.CustomerId,
                PageTitle = page.PageTitle,
                PageContent = page.PageContent,
                PageExcerpt = page.PageExcerpt,
                PageParentId = page.PageParentId,
                Url = page.Url + page.PageTitle +page.Id,
                Published = page.Published
            };

            return pageDto;
        }

        public virtual async Task<IEnumerable<Page>> SearchPageByNameAsync(string name)
        {
            return await _context.Pages
                .Where(x => EF.Functions.Like(x.PageTitle, $"%{name}%"))
                .ToListAsync();
        }

        public virtual async Task<ActionResult<PageDto>> UpdatePageAsync(PageDto pageDto)
        {
            if (pageDto == null)
                return null;

            var page = await _context.Pages.FindAsync(pageDto.Id);

            if (page == null) return null;

            //add the updated time
            pageDto.UpdatedOnUtc = DateTime.UtcNow;
            _mapper.Map(pageDto, page);

            _context.Pages.Update(page);

            //save changes in db
            await _context.SaveChangesAsync();

            return pageDto;
        }

        #endregion
    }
}