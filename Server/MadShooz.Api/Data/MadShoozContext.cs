using MadShooz.Api.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace MadShooz.Api.Data;

public class MadShoozContext : DbContext
{
	public DbSet<Shoe> Shoes { get; set; }
	public DbSet<User> Users { get; set; }

	public MadShoozContext(DbContextOptions<MadShoozContext> options) : base(options) {}
}
