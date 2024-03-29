﻿using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class CustomerController : BaseApiController
{
    #region Fields

    private readonly DataContext _context;
    private readonly ITokesnService _tokesnService;
    private readonly ICustomerRepository _customerRepository;

    #endregion

    #region Ctor

    public CustomerController(DataContext context, ITokesnService tokesnService, ICustomerRepository customerRepository)
    {
        _context = context;
        _tokesnService = tokesnService;
        _customerRepository = customerRepository;
    }

    #endregion

    #region Utilities
    private async Task<bool> EmailAlreadyInUse(string email)
    {
        return await _context.Customers.AnyAsync(x => x.Email == email.ToLower());
    }

    #endregion

    #region Methods

    [HttpGet]
    public virtual async Task<ActionResult<IEnumerable<Customer>>> GetAllCustomers()
    {
        return await _context.Customers.ToListAsync();
    }

    [HttpGet("{id}")]
    public virtual async Task<ActionResult<Customer>> GetCustomerById(int Id)
    {
        return await _context.Customers.FindAsync(Id);
    }
    
    [HttpGet("{username}")]
    public virtual async Task<ActionResult<Customer>> GetCustomerByUsername(string username)
    {
        return await _customerRepository.GetCustomerByUsername(username);
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public virtual async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {

        if (await EmailAlreadyInUse(registerDto.Email)) return BadRequest("Email is already in use");

        using var hmac = new HMACSHA512();

        var customer = new Customer
        {
            Username = registerDto.Username,
            Email = registerDto.Email,
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
            PasswordSalt = hmac.Key,
        };

        _context.Customers.Add(customer);

        return new UserDto
        {
            Username = customer.Username,
            Token = _tokesnService.CreateToken(customer),
        };
    }

    [AllowAnonymous]
    [HttpPost("login")]
    public virtual async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
        var customer = await _context.Customers.SingleOrDefaultAsync(x => x.Email == loginDto.Email);

        if (customer == null) return Unauthorized();

        using var hmac = new HMACSHA512(customer.PasswordSalt);

        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

        for (int i = 0; i < computedHash.Length; i++)
        {
            if (computedHash[i] != customer.PasswordHash[i])
                return Unauthorized("Invalid Password");
        }

        return new UserDto
        {
            Username = customer.Username,
            Token = _tokesnService.CreateToken(customer),
        };
    }
    #endregion
}