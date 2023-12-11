namespace API.Entities;

/// <summary>
/// Represents a customer
/// </summary>
public partial class Customer : BaseEntity
{
    public Customer()
    {
        CustomerGuid = Guid.NewGuid();
    }

    /// <summary>
    /// Gets or sets the customer GUID
    /// </summary>
    public Guid CustomerGuid { get; set; }

    /// <summary>
    /// Gets or sets the username
    /// </summary>
    public string Username { get; set; }

    /// <summary>
    /// Gets or sets the PasswordHash
    /// </summary>
    public byte[] PasswordHash { get; set; }

    /// <summary>
    /// Gets or sets the PasswordSalt
    /// </summary>
    public byte[] PasswordSalt { get; set; }

    /// <summary>
    /// Gets or sets the email
    /// </summary>
    public string Email { get; set; }

    /// <summary>
    /// Gets or sets a value indicating whether the customer is active
    /// </summary>
    public bool Active { get; set; }

    /// <summary>
    /// Gets or sets the date and time of entity creation
    /// </summary>
    public DateTime CreatedOnUtc { get; set; }

    /// <summary>
    /// Gets or sets the date and time of last login
    /// </summary>
    public DateTime? LastLoginDateUtc { get; set; }
}
