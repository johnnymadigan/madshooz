using System;

namespace MadShooz.Api.Models;

public class User
{
	public int Id { get; set; }
	public string UserName { get; set; } = null!;
	// TODO check out ASP.NET identity
	// we want to make usernames the PK
	// we want user roles and claims
	// we want to give user's an access token when they login
}
