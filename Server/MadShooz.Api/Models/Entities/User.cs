using System.ComponentModel.DataAnnotations;

namespace MadShooz.Api.Models.Entities;

public class User : TrackableEntity
{
    [Key]
	public string UserName { get; set; } = null!;
    // TODO demystify ASP.NET identity (diff angles + fill pre-reqs)
    // make usernames the PK
    // roles n claims in access token?
    // hash the password?
    // grant the access token with correct username + password?
}
