using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    /// <summary>
    /// Represents a Page
    /// </summary>
    [Table("Page")]
    public class Page : BaseEntity
    {        
        /// <summary>
        /// Gets or sets the customer id
        /// </summary>
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }

        /// <summary>
        /// Gets or sets a value for page title
        /// </summary>
        public string PageTitle { get; set; }

        /// <summary>
        /// Gets or sets a value for page content
        /// </summary>
        public string PageContent { get; set; }

        /// <summary>
        /// Gets or sets a value for page content
        /// </summary>
        public string PageExcerpt { get; set; }

        /// <summary>
        /// Gets or sets a value for parent page
        /// </summary>
        public int PageParentId { get; set; }

        /// <summary>
        /// Gets or sets a value for page url
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether the entity is published
        /// </summary>
        public bool Published { get; set; }

        /// <summary>
        /// Gets or sets the date and time of instance creation
        /// </summary>
        public DateTime CreatedOnUtc { get; set; }

        /// <summary>
        /// Gets or sets the date and time of instance update
        /// </summary>
        public DateTime UpdatedOnUtc { get; set; }
    }
}