namespace MadShooz.Api.Models.Entities;

public class Shoe : TrackableEntity
{
	public int Id { get; set; }
	public string Name { get; set; } = null!;
	public decimal Price { get; set; }
	public int Stock { get; set; }
	public string? ModelName { get; set; }
}
