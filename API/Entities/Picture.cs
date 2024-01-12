using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    /// <summary>
    /// Represents a Picture
    /// </summary>
    [Table("Picture")]
    public partial class Picture : BaseEntity
    {        
        /// <summary>
        /// Gets or sets the photo mime type
        /// </summary>
        public string MimeType { get; set; }
        
        /// <summary>
        /// Gets or sets the "src" attribute for "img" HTML element. If empty, then a default rule will be used.
        /// </summary>
        public string SrcAttribute { get; set; }

        /// <summary>
        /// Gets or sets the "alt" attribute for "img" HTML element.
        /// </summary>
        public string AltAttribute { get; set; }

        /// <summary>
        /// Gets or sets the "title" attribute for "img" HTML element.
        /// </summary>
        public string TitleAttribute { get; set; }
    }
}