namespace MadShooz.Api.Models.DTOs;

public class ShoeDto
{
    public string Name { get; set; } = null!;
    public decimal Price { get; set; }
    public int Stock { get; set; }
    public string? ModelName { get; set; }
}
