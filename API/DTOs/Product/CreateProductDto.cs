namespace API.DTOs
{
    public class CreateProductDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public IList<int> CategoryIds { get; set; }
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
        public DateTime CreatedOnUtc { get; set; }
    }
}