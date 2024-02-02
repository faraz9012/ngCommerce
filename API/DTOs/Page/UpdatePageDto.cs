namespace API.DTOs
{
    public class UpdatePageDto
    {
        public int Id { get; set; }
        public string CustomerUsername { get; set; }
        public string PageTitle { get; set; }
        public string PageContent { get; set; }
        public string PageExcerpt { get; set; }
        public int PageParentId { get; set; }
        public string Url { get; set; }
        public bool Published { get; set; }
    }
}