using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Customer, CustomerDto>();
            CreateMap<CategoryDto, Category>();
            CreateMap<Category, CategoryDto>();
            CreateMap<ProductDto, Product>();
            CreateMap<ProductDto, CategoryDto>();
            CreateMap<PageDto, Page>();
            CreateMap<Page, PageDto>();
        }
    }
}