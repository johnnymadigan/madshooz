namespace MadShooz.Api.Models.Entities;

/// <summary>
/// Inherit to add extension properties to track a database entity 
/// </summary>
public abstract class TrackableEntity
{
	public DateTime? CreatedOn { get; set; }
	public string? CreatedBy { get; set; }
	public DateTime? ModifiedOn { get; set; }
	public string? ModifiedBy { get; set; }
}
