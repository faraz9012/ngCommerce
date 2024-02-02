using API.Entities;

namespace API.Interfaces
{
    public interface ICustomerRepository
    {
        Task<Customer> GetCustomerByUsername(string username);
        Task<Customer> GetCustomerById(int id);
    }
}