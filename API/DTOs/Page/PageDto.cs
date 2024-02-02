namespace API.DTOs
{
    public class PageDto
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public string PageTitle { get; set; }
        public string PageContent { get; set; }
        public string PageExcerpt { get; set; }
        public int PageParentId { get; set; }
        public string Url { get; set; }
        public bool Published { get; set; }
        public DateTime CreatedOnUtc { get; set; }
        public DateTime UpdatedOnUtc { get; set; }        
    }
}