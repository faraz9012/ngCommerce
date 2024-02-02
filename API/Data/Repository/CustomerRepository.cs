using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public CustomerRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public virtual async Task<Customer> GetCustomerByUsername(string username)
        {
            return await _context.Customers
                .Where(x => x.Username == username)
                .FirstOrDefaultAsync();
        }

        public virtual async Task<Customer> GetCustomerById(int Id)
        {
            return await _context.Customers.FindAsync(Id);
        }
        
    }
}