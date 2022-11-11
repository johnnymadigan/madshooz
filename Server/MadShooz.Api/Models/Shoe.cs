using System;
using MadShooz.Api.Data;

namespace MadShooz.Api.Models;

public class Shoe : TrackableEntity
{
	public int Id { get; set; }
	public string Name { get; set; } = null!;
	public decimal Price { get; set; } = 0.00M;
	public int Stock { get; set; } = 0;
	public string? ModelName { get; set; }
}
