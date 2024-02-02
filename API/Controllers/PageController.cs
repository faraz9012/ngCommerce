using API.DTOs;
using API.DTOs.Page;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PageController : BaseApiController
    {
        #region Fields
        private readonly IPageRepository _pageRepository;
        private readonly ICustomerRepository _customerRepository;

        #endregion

        #region Ctor
        public PageController(IPageRepository pageRepository, ICustomerRepository customerRepository)
        {
            _pageRepository = pageRepository;
            _customerRepository = customerRepository;
        }
        #endregion

        #region Methods

        [HttpGet]
        public virtual async Task<ActionResult<IList<Page>>> GetAllAsync()
        {
            return await _pageRepository.GetAllAsync();
        }

        [HttpPost("create")]
        public virtual async Task<ActionResult<PageDto>> Create([FromBody]CreatePageDto createPageDto)
        {
            if (createPageDto == null) return BadRequest("Bad request");

            var customer = _customerRepository.GetCustomerByUsername(User.GetUserName());

            if (customer == null) return NoContent();

            var page = new Page
            {
                CustomerId = customer.Id,
                PageTitle = createPageDto.PageTitle,
                PageContent = createPageDto.PageContent,
                PageExcerpt = createPageDto.PageExcerpt,
                PageParentId = createPageDto.PageParentId,
                Url = createPageDto.Url,
                Published = createPageDto.Published,
            };

            var newCategory = await _pageRepository.InsertIntoPagesAsync(page);

            return newCategory;
        }

        [HttpPut]
        public virtual async Task<ActionResult<PageDto>> Update(UpdatePageDto updatePageDto)
        {
            if (updatePageDto == null) return BadRequest("Page was not found");

            var customer = _customerRepository.GetCustomerByUsername(User.GetUserName());

            if (customer == null) return NoContent();

            var pageDto = new PageDto
            {
                Id = updatePageDto.Id,
                CustomerId = customer.Id,
                PageTitle = updatePageDto.PageTitle,
                PageContent = updatePageDto.PageContent,
                PageExcerpt = updatePageDto.PageExcerpt,
                PageParentId = updatePageDto.PageParentId,
                Url = updatePageDto.Url,
                Published = updatePageDto.Published,
            };

            var updatedPage = await _pageRepository.UpdatePageAsync(pageDto);

            if (updatedPage == null) return BadRequest("Something went wrong, failed to update page");

            return updatedPage;

        }
        
        
        [HttpDelete("delete-page/{id}")]
        public virtual async Task<ActionResult> Delete(int id)
        {
            var page = await _pageRepository.GetPageByIdAsync(id);

            if (page == null) return NotFound("Page not found");

            var result = await _pageRepository.DeletePageAsync(id);

            if (!result) return BadRequest("Failed to delete Page");

            return Ok("Page successfully deleted");
        }

        #endregion
    }
}