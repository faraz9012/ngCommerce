namespace API.DTOs;
public class CustomerDto
{
        public int Id { get; set; }    
        public string UserName { get; set; }
        public string email {get; set;}
        public string Gender { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastLoginDateUtc { get; set; }
}
