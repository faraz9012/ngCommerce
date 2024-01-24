namespace API.DTOs
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int FeaturedImageId { get; set; }
        public string ThumbnailPictures { get; set; }
        public decimal Price { get; set; }
        public decimal OldPrice { get; set; }
        public bool MarkAsNew { get; set; }
        public DateTime? MarkAsNewStartDateTimeUtc { get; set; }
        public DateTime? MarkAsNewEndDateTimeUtc { get; set; }
        public bool ShowOnHomepage { get; set; }
        public bool IncludeInTopMenu { get; set; }
        public bool Published { get; set; }
        public DateTime UpdatedOnUtc { get; set; }
        
    }
}