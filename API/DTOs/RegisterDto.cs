namespace API.DTOs;
public class RegisterDto
{
    /// <summary>
    /// Gets or sets the username
    /// </summary>
    public string Username { get; set; }

    /// <summary>
    /// Gets or sets the email
    /// </summary>
    public string Email { get; set; }

    /// <summary>
    /// Gets or sets the PasswordHash
    /// </summary>
    public string Password { get; set; }
}
