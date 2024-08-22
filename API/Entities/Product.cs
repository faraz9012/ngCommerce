using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    /// <summary>
    /// Represents a Product
    /// </summary>
    public class Product : BaseEntity
    {
        /// <summary>
        /// Gets or sets the name
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the description
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Gets or sets the featured image 
        /// </summary>
        public int FeaturedImageId { get; set; }

        /// <summary>
        /// Gets or sets the thumbnail pictures
        /// </summary>
        [NotMapped]
        public IEnumerable<int> InternalThumbnailPictures
        {
            get
            {
                var tab = ThumbnailPictures.Split(',');
                return tab.Select(int.Parse).AsEnumerable();
            }
            set { ThumbnailPictures = string.Join(",", value); }
        }

        [EditorBrowsable(EditorBrowsableState.Never)]
        public string ThumbnailPictures { get; set; }

        /// <summary>
        /// Gets or sets the price
        /// </summary>
        public decimal Price { get; set; }

        /// <summary>
        /// Gets or sets the old price
        /// </summary>
        public decimal OldPrice { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this product is marked as new
        /// </summary>
        public bool MarkAsNew { get; set; }

        /// <summary>
        /// Gets or sets the start date and time of the new product (set product as "New" from date). Leave empty to ignore this property
        /// </summary>
        public DateTime? MarkAsNewStartDateTimeUtc { get; set; }

        /// <summary>
        /// Gets or sets the end date and time of the new product (set product as "New" to date). Leave empty to ignore this property
        /// </summary>
        public DateTime? MarkAsNewEndDateTimeUtc { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether to show the category on home page
        /// </summary>
        public bool ShowOnHomepage { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether to include this category in the top menu
        /// </summary>
        public bool IncludeInTopMenu { get; set; }

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