using API.Entities;

namespace API.Interfaces;
public interface ITokesnService
{
    string CreateToken(Customer customer);
}
