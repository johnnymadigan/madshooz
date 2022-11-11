using System;

namespace MadShooz.Api.Data;

public class TrackableEntity
{
	public DateTime? CreatedOn { get; set; }
	public string? CreatedBy { get; set; }
	public DateTime? ModifiedOn { get; set; }
	public string? ModifiedBy { get; set; }
}

