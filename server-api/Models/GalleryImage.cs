public class GalleryImage
{
    public int Id { get; set; }
    public string FileName { get; set; } = string.Empty;
    public string? Title { get; set; }
    public DateTime Data { get; set; } = DateTime.Now;
}